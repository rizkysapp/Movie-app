import { getMovie, searchMovie } from "../Api";
import { useEffect, useState } from "react";

function Navbar() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovie().then((result) => {
      setMovieList(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const searchList = await searchMovie(q);
      setMovieList(searchList.results);
    }
  };
  return (
    <div className=" shadow py-4 px-10 flex justify-between items-center">
      <h1 className=" text-2xl text-slate-200 font-semibold font-serif">
        Iclo<span className=" text-amber-600">Movie</span>
      </h1>
      <div className="mr-8 flex space-x-2">
        <input type="text" className="rounded py-1 px-2 text-sm text-slate-900" placeholder="Silahkan cari..." onChange={({ target }) => search(target.value)} />
        <button className="py-1 px-4 shadow bg-amber-600 rounded-md text-center text-slate-900 text-sm font-medium hover:bg-amber-700 hover:transition">search</button>
      </div>
    </div>
  );
}

export default Navbar;
