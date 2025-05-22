import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { logo, SUPPORTED_LANGUAGE } from '../utils/constant.js';
import { toogleGptSearchView } from '../utils/gptSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import Lang from '../utils/languageConstants';
import { changeLanguage } from '../utils/configSlice.js';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  const handelLanguageChange = ( e ) =>{

    dispatch(changeLanguage(e.target.value));
  };
  const handleGptSearchClick =() =>{

   dispatch( toogleGptSearchView() );
  };

  const handelsignout = () =>{
      signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/error");
      });
   }

  const location = useLocation();
  
  // Check if current page is the signup page
  const showsigninbutton = location.pathname === '/signup';
    const showsignoutbutton = location.pathname === '/browse';

  return (
    <div className="w-full absolute px-[45px] pt-5 py-2 bg-gradient-to-b from-black z-40 flex justify-between">
      <div>
      <img className="w-40 " src={logo}/>
      </div>

      <div className='mt-3 '>
       {showsigninbutton && (
        <Link to="/" >
          <button className=" pt-2 pb-2 pl-5 pr-5 rounded-sm text bg-red-500 btn btn-primary">Sign In</button>
        </Link>
      )}
      </div>

    <div className='mt-3'>
  {showsignoutbutton && (
    <div className="flex items-center">
      <div>
        {showGptSearch && (
        <select className='bg-white py-2 px-4 rounded-lg' onChange={handelLanguageChange}>
          {SUPPORTED_LANGUAGE.map((Lang)=> (<option key ={Lang.identifier} value={Lang.identifier}> {Lang.name}</option>))}
        </select>
        )}
        <button className='py-2 px-4 mx-4 ,y-2 bg-purple-800 text-white rounded-lg' onClick = {handleGptSearchClick}> {showGptSearch ? "Homepage" :"GPT Search"}</button>
      </div>
      <div>
        <img
          className="w-10 h-10"
          src="https://occ-0-3213-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="User Avatar"
        />
      </div>
      <button
        className="pt-2 pb-2 px-2 rounded-sm text-white cursor-pointer" onClick={handelsignout}
      >
        (Sign Out)
      </button>
    </div>
  )}
</div>

    </div>
 
  );
};

export default Header;