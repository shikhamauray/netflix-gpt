import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Fetch trailer videos
  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();
    //   console.log("API Response:", json);

      // Safe filtering
      const filterData = Array.isArray(json.results)
        ? json.results.filter((video) => video.type === "Trailer")
        : [];

      // Fallback if no Trailer found
      const trailer = filterData.length > 0 ? filterData[0] : json.results?.[0];

    //   console.log("Selected trailer:", trailer);

      dispatch(addTrailerVideo(trailer));
    } catch (err) {
    //   console.error("Failed to fetch movie trailers:", err);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, []);

};

export default useMovieTrailer;
