import { useDispatch, useSelector } from "react-redux";
import {addTopRated} from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTopRatedMovies = ()=>{

    // fetching movies APIs and send it to store
  const dispatch = useDispatch();
  const TopRatedMovies = useSelector(store => store.movies.TopRatedMovies);

  const getTopRatedMovies =async() =>{

    const data = await fetch ("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);

    const json = await data.json ();
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(()=>{

    if (!TopRatedMovies) getTopRatedMovies();

  },[]);

};

export default useTopRatedMovies;