import React, { useRef, useState } from 'react';
import Header from './Header';
import {validateSignIn} from '../utils/validate';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase'; // adjust the path if needed



const Login = () => {

  const [issigninform, setissigninform] = useState(true);
  const[errorMessage,seterrorMessage] = useState(null);

  const toggelsigninform = () =>{
    setissigninform(!issigninform);
  };

  const email = useRef(null);
  const password = useRef(null);

  //from validation

 const handelbuttoncliked = async () => {
  const message = validateSignIn(email.current.value, password.current.value);
  seterrorMessage(message);
  if (message) return;

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    );
    const user = userCredential.user;
    // console.log("Logged in user:", user);
    // alert("Login successful!");
    // Optionally navigate or update state
  } catch (error) {
    // console.error(error);
    seterrorMessage(error.message);
  }
};


  return (
    <div className="h-screen w-full text-white" >
      <Header/>
   
  <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
    alt="bg-img"
    className="absolute top-0 left-0 w-full h-full object-cover -z-10"/>

  {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10" />


     <div className="flex justify-center items-center min-h-screen px-4">
    
        <form onSubmit={(e) => e.preventDefault()}  className=" w-full max-w-md mt-30 space-y-4 p-15 bg-black opacity-82 rounded-md">
        <h1 className='text-3xl font-semibold mb-8'>Sign In</h1>
          <div>
           
            <input
            ref={email}
              type="email"
              className="w-full px-4 py-3 bg-transparent text-white rounded border-1 border-[#878787]" placeholder='Email or mobile number' />
          </div>

          <div>
            {issigninform && (
               <input
               ref={password}
              type="password"
              className="w-full px-4 py-3  border-1 border-[#878787] text-white rounded " placeholder='Password'
             
            />
            )}
           
          </div>

          <p className='text-red-500 text-lg'>{errorMessage}</p>

          <button className="w-full py-2 bg-red-600" onClick={handelbuttoncliked}>
            Sign In
          </button>

          <p className='text-center'> OR</p>

          <button type="button" className="w-full py-2 bg-[rgba(128,128,128,0.4)] " onClick={toggelsigninform}>
           {issigninform ? 'Use a sign-in code' : 'Use pasaword '}
          </button>

          <div className="flex items-center justify-between mt-3 text-sm text-gray-400">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox bg-gray-700 rounded text-red-600" />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-white hover:underline">Forgot password?</a>
          </div>

          <div>
            <p> New to Netflix? <Link to="/signup" className="cursor-pointer hover:underline font-semibold text-white"> Sign up now.  </Link> </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Login;