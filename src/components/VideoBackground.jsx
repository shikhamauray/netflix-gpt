import React, { useEffect } from 'react'
import useMovieTrailer from '../hooks/useMovieTrail';
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
 const trailerVideo = useSelector ( store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className="w-full aspect-video relative overflow-hidden z-0">
      <iframe
        className="w-full h-full pointer-events-none "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube trailer"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
       
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground;