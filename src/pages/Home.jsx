import { getMovie, searchMovie } from "../Api";
import { useEffect, useState } from "react";

function Home() {

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
      getMovie().then((result) => {
        setMovieList(result);
      });
    }, []);

    const PopularMovieList = () => {
      return movieList.map((movies, i) => {
        return (
          <div className="flex bg-slate-200 text-slate-900 flex-col text-center rounded-md hover:shadow-md hover:shadow-slate-500 hover:transition-all" key={i}>
            <img className=" rounded-t-md" src={`${process.env.REACT_APP_BASEIMAGEURL}/${movies.poster_path}`} alt="img" />
            <div className="mt-4 flex-col">
              <h1 className="text-lg font-bold px-2 items-center h-20">{movies.title}</h1>
              <p className=" text-xs text-slate-800">{movies.release_date}</p>
              <p className="text-sm mt-4 mb-3 font-semibold text-slate-900">Rating: <span className=" text-amber-600">{movies.vote_average}</span></p>
            </div>
          </div>
        );
      });
    };

    const search = async (q) => {
      if(q.length > 3) {
        const searchList = await searchMovie(q)
        setMovieList(searchList.results)
      }
    }

    return (
      <div className="pb-20 bg-gray-900 text-slate-200">
        <div className=" shadow py-4 px-10 flex justify-between items-center">
          <h1 className=" text-2xl text-slate-200 font-semibold font-serif">
            Iclo<span className=" text-amber-600">Movie</span>
          </h1>
          <div className="mr-8 flex space-x-2">
            <input type="text" className="rounded py-1 px-2 text-sm text-slate-900" placeholder="Silahkan cari..." onChange={({target}) => search(target.value)}/>
            <button className="py-1 px-4 shadow bg-amber-600 rounded-md text-center text-slate-900 text-sm font-medium hover:bg-amber-700 hover:transition">search</button>
          </div>
        </div>
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
            <PopularMovieList />
          </div>
        </div>
      </div>
    );
}

export default Home