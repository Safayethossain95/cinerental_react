import { getAllMovies } from "../data/movies.js";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  const movies = getAllMovies();
  return (
    <>
      <div className="content mt-10">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie, index) => {
            return (
              <>
               <MovieCard movie={movie} index={index}/>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
