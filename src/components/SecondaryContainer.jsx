import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store) => store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-65 relative z-20'>
        <MovieList title={"Now Playing for you"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Movies for you"} movies={movies.PopularMovies}/>
      <MovieList title={"Top Rated"} movies={movies.TopRatedMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer