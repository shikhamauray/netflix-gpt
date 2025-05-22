import { useDispatch, useSelector } from "react-redux";
import {addPopularMovies} from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = ()=>{

    // fetching movies APIs and send it to store
  const dispatch = useDispatch();
   const PopularMovies = useSelector(store => store.movies.PopularMovies);

  const getPopularMoviesMovies =async() =>{

    const data = await fetch ("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);

    const json = await data.json ();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{

    if (!PopularMovies) getPopularMoviesMovies();

  },[]);

};

export default usePopularMovies;