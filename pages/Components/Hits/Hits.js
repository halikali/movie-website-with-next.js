import React, { useEffect } from "react";
import Moment from "react-moment";
import { useSelector } from "react-redux";

const Hits = () => {
  const popularMovies = useSelector(
    (state) => state.popularMoviesReducer.data.results
  );
  useEffect(() => {
    console.log(popularMovies);
  }, []);
  return (
    <div className="container">
      <p>All Time Hits</p>
      <div className="popular-movies-wrapper">
        {popularMovies &&
          popularMovies.map((popularMovie) => (
            <div className="popular-movies-container">
              <div className="popular-movies">
                <img
                  src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
                />
              </div>
              <p> {popularMovie.title} </p>
              <p>
                <Moment format="DD.MM.YYYY">{popularMovie.release_date}</Moment>
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Hits;
