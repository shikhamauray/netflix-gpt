import React, { useState } from 'react';
import Header from './Header';


const Login = () => {

  const [issigninform, setissigninform] = useState(true);

  const toggelsigninform = () =>{

    setissigninform(!issigninform);

  };

  return (
    <div className="h-screen w-full text-white" >
      <Header/>

      <div className="absolute">
      <img  className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg" alt="bg-img" />
      </div>

     {/* Centered Form */}
     <div className="text-white">
    
        <form className=" space-y-4 p-8  w-3/12 absolute  my-36 mx-auto right-0 left-0 bg-black opacity-89 bg- rounded-md">
        <h1 className='text-3xl font-semibold mb-8'>Sign In</h1>
          <div>
           
            <input
              type="email"
              className="w-full px-4 py-3 bg-transparent text-white rounded border-1 border-[#878787]" placeholder='Email or mobile number'
              
            />
          </div>

          <div>
            {issigninform && (
               <input
              type="password"
              className="w-full px-4 py-3  border-1 border-[#878787] text-white rounded " placeholder='Password'
             
            />
            )}
           
          </div>

          <button type="button" className="w-full py-2 bg-red-600">
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
        </form>
      </div>
    </div>
  );
};

export default Login;