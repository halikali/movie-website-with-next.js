import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";

const PopularTvSeries = () => {
  const popularTvSeries = useSelector(
    (state) => state.popularTvSeriesReducer.data.results
  );
  const data = useSelector(
    (state) => state.popularMoviesDailyReducer.data.results
  );

  return (
    <div className="container">
      <p>Popular Tv Series</p>

      <div className="popular-movies-wrapper">
        <Swiper spaceBetween={50} slidesPerView={4} className="mySwiper">
          {popularTvSeries &&
            popularTvSeries.map((popularTvSerie) => (
              <SwiperSlide>
                <div className="popular-movies-container">
                  <div className="popular-movies">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${popularTvSerie.backdrop_path}`}
                    />
                  </div>
                  <p> {popularTvSerie.name} </p>
                  <p>
                    {popularTvSerie.first_air_date} -
                    <FontAwesomeIcon icon={faImdb} />{" "}
                    {popularTvSerie.vote_average}{" "}
                  </p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularTvSeries;
