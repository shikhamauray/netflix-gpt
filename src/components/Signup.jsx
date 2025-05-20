import Header from './Header';
import React, { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {validateSignUp} from '../utils/validate';
import { registerUser } from '../firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const SignUp = () => {

const[errorMessage,seterrorMessage] = useState(null);
   const navigate = useNavigate();
   const dispatch = useDispatch();


  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

const validationcheck = async () => {
    const message = validateSignUp(name.current.value, email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    try {
      // Step 1: Create user with email & password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      const user = userCredential.user;

      // Step 2: Update display name
      await updateProfile(user, {
        displayName: name.current.value,
        photoURL: 'https://example.com/default-avatar.png', // optional
      });

      // alert('User registered successfully!');
      const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(addUser({ uid, email, displayName ,photoURL}));

      // navigate('/browse'); // redirect after signup
    } catch (error) {
      // console.error('Signup error:', error.message);
     seterrorMessage(error.message);
    }
  };

    return(
        <div className="h-screen w-full text-white">

            <Header/>

            <img
    src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
    alt="bg-img"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"
  />

  {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10" />

<div className="flex justify-center mx-auto items-center min-h-screen ">
  <form onSubmit={(e) => e.preventDefault()} className=" w-full max-w-3xl space-y-4  text-center opacity-89 rounded-md">
                <div className="text-center">
                    <h1 className='text-[56px] font-extrabold mb-4 text-base/18'>Unlimited movies, <br />TV shows and more</h1>
                    <h3 className='text-2xl font-semibold mb-6'>Starts at ₹149. Cancel at any time.</h3>
                    <p className='text-[17px]'>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>

                  <input
                  ref={name}
              type="Name"
              className="w-60 px-4 py-3  text-white rounded border-1 border-white mr-5" placeholder='Name'
            />
            <input
            ref={email}
              type="email"
              className="w-60 px-4 py-3  text-white rounded border-1 border-white mr-5" placeholder='Email'
            />
            <input
            ref={password}
              type="password"
              className="w-60 px-4 py-3  text-white rounded border-1 border-white" placeholder='Password'
            />

              <p className='text-red-500 text-lg'>{errorMessage}</p>

             <button className="w-90 py-2 bg-red-600" onClick={validationcheck} >
            Sign Up
          </button>
               
            </form>
</div>
          
        </div>
     
    );

};

export default SignUp;