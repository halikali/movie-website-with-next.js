import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import SwiperCore, { Navigation, Pagination, Mousewheel } from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel]);

const UpcomingMovies = () => {
  const upcomingMovies = useSelector(
    (state) => state.upcomingMoviesReducer.data.results
  );

  const onChangeHandler = (e) => {
    let activeIndex = e.activeIndex;
    let activeSrc = e.slides[activeIndex].children[0].childNodes[0].currentSrc;
    document.getElementById("upcoming-background-img").src = activeSrc;

    document.getElementsByClassName(
      "upcoming-movies-background-section-text-wrapper"
    )[0].children[0].innerText =
      e.slides[activeIndex].children[0].children[1].children[0].innerText;

    document.getElementsByClassName(
      "upcoming-movies-background-section-text-wrapper"
    )[0].children[1].innerText =
      e.slides[activeIndex].children[0].children[1].children[1].innerText;
  };
  return (
    <div className="container">
      <div className="upcoming-movies-background-section">
        {upcomingMovies && (
          <img
            className="upcoming-movies-backround-img"
            src={`https://image.tmdb.org/t/p/original/${upcomingMovies[0].backdrop_path}`}
            id="upcoming-background-img"
          />
        )}
        <div className="upcoming-movies-background-section-text-wrapper">
          <h3> Mortal Kombat </h3>
          <p>
            {" "}
            Washed-up MMA fighter Cole Young, unaware of his heritage, and
            hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out
            and trains with Earth's greatest champions as he prepares to stand
            against the enemies of Outworld in a high stakes battle for the
            universe.{" "}
          </p>
          <button className="button">play now</button>
        </div>
        <div className="upcoming-movies-vertical-slider">
          <Swiper
            direction={"vertical"}
            pagination={{
              type: "progressbar",
            }}
            className="vertical-swiper"
            navigation={true}
            pagination={true}
            mousewheel={true}
            onSlideChange={onChangeHandler}
            spaceBetween={50}
            slidesPerView={3}
            centeredSlides={true}
          >
            {upcomingMovies &&
              upcomingMovies.map((upcomingMovie) => (
                <SwiperSlide className="vertical-slide">
                  <div className="vertical-slide-img-wrapper">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${upcomingMovie.backdrop_path}`}
                    />
                    <div className="active-upcoming-desc">
                      <p>{upcomingMovie.title} </p>
                      <p> {upcomingMovie.overview} </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default UpcomingMovies;
