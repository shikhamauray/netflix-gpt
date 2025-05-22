import React, { useRef } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  if (!movies || !Array.isArray(movies)) return null;

  return (
    <div className="relative text-white pb-6">
      <h2 className="text-xl font-bold mb-6 pt-3 pl-16 ">{title} <span className="text-blue-400"></span></h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10  text-6xl hover:bg-black p-2 h-[100%] hidden md:block"
      >
        ‹
      </button>

      {/* Scrollable Movie Row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-4"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-43 transform -translate-y-1/2 text-6xl hover:bg-black p-2 h-[70%] hidden md:block"
      >
       ›
      </button>
    </div>
  );
};

export default MovieList;
