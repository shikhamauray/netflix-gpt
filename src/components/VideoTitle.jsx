import React from 'react';
import { Play } from 'lucide-react';
import { Info } from 'lucide-react';

const VideoTitle = ({ title, overview, movieLogo }) => {
   
  return (
    <div className="w-full aspect-video absolute top-0 left-0 bg-gradient-to-r from-black via-transparent to-transparent text-white flex flex-col justify-center pl-12 pb-32 z-10 overflow-hidden">
    
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{title}</h1>
      <p className="w-full md:w-3/6 text-lg md:text-xl mb-6 text-gray-200 drop-shadow-sm">{overview}</p>
      <div className="flex gap-4">
      <button className="flex items-center gap-2 bg-white text-black text-lg font-semibold py-2 px-6 rounded hover:bg-opacity-80 transition">
      <Play size={20} />
      Play
     </button>

<button className="flex items-center gap-2 bg-gray-700 bg-opacity-90 text-white text-lg font-semibold py-2 px-6 rounded hover:bg-opacity-90 transition">
  <Info size={20} />
  More Info
</button>
      </div>
    </div>
  );
};

export default VideoTitle;
