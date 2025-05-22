import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {

    const Langkey = useSelector((store)=> store.config.Lang);
    const searchText = useRef(null);

    const handelGptSearchClick =async ()=>{

        //make an API call to GPT API and get Movie Results

        const gptQuery =" Act as a Movie Recommendation system and suggest some movies for the query " + searchText.current.value+". only give me names of 5 movies , comma seperated like the example result given ahead . Example Result : Gadar, Sholay, Don, Golamal, Koi Mil Gaya ";

        const gptResults = await openai.chat.completions.create({
                messages: [{ role: 'user', content: gptQuery}],
                model: 'gpt-3.5-turbo',});
                
             console.log(gptResults.choices);
    };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 ">
      <div className='pt-34'>
        <form className="flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-300" onSubmit={(e) => e.preventDefault()}>
             <input
             ref={searchText}
          type="text"
          placeholder={Lang[Langkey].gptSearchPlaceholder}
          className="flex-grow px-6 py-3 text-lg focus:outline-none"
        />
        <button
          className="bg-red-900 hover:bg-black text-white px-6 py-3 text-lg font-medium transition duration-300"
        onClick={handelGptSearchClick}>
         {Lang[Langkey].Search}
        </button>

        </form>
       
      </div>
    </div>
  );
};

export default GptSearchBar;
