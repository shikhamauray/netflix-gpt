import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSearchPage from './GptSearchPage'
import { BG_IMG } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
       <img src={ BG_IMG}
          alt="bg-img"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"/>
      <GptSearchBar/>
      <GptSearchPage/>
    </div>
  )
}

export default GptSearch