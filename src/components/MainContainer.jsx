import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

  const movies = useSelector((store)=> store.movies?.nowPlayingMovies);
  if(!movies) return ;

  const mainMovies = movies[0];
  // console.log(mainMovies);

   const {original_title, overview ,id, poster_path} = mainMovies ;


  return (
    <div className='max-w-full'>
      <div>
        <VideoTitle movieLogo ={poster_path} title={original_title} overview= {overview}/>
      <VideoBackground movieId={id}/>
      </div>
      
    </div>
  );
};

export default MainContainer;