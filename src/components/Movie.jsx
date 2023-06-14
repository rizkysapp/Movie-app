function Movie() {
  return (
    <div className="px-8 mt-8">
      <div className="pb-2 px-2 shadow-sm border-b-2 border-gray-400 flex text-center space-x-4">
        {/* text-2xl font-medium */}
        <a href="movie" className="text-xl font-normal font-mono hover:text-slate-400 transition">
          Movie
        </a>
        <a href="drama" className="text-xl font-normal font-mono hover:text-slate-400 transition">
          Drama
        </a>
        <a href="anime" className="text-xl font-normal font-mono hover:text-slate-400 transition">
          Anime
        </a>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-8 px-8">
        {/* <PopularMovieList /> */}
      </div>
    </div>
  );
}

export default Movie;
