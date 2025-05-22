import React from 'react';
import { IMG_CDN_URL } from '../utils/constant';

const MovieCard = ({ posterPath }) => {
  return (
    <div className="min-w-[150px] max-w-[150px]">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Poster"
        className="w-full h-auto rounded-md"
      />
    </div>
  );
};

export default MovieCard;
