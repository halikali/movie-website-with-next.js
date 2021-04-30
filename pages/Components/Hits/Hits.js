import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
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
        <Swiper spaceBetween={50} slidesPerView={4}>
          {popularMovies &&
            popularMovies.map((popularMovie) => (
              <SwiperSlide>
                <div className="popular-movies-container">
                  <div className="popular-movies">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${popularMovie.backdrop_path}`}
                    />
                  </div>
                  <p> {popularMovie.title} </p>
                  <p>
                    {popularMovie.release_date} -
                    <FontAwesomeIcon icon={faImdb} />{" "}
                    {popularMovie.vote_average}{" "}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Hits;
