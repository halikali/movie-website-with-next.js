import React from "react";

const Carousel = () => {
  return (
    <div className="carousel">
      <img
        src="http://streamlab.gentechtree.com/red-demo/wp-content/uploads/sites/2/2019/03/5.jpg"
        className="carousel-background-img"
      />
      <div className="carousel-items-wrapper">
        <div className="carousel-text-wrapper">
          <p id="high-rated-text">HIGH RATED</p>
          <h1 id="movie-name-text">THIEVE THE BANK</h1>
          <p id="movie-description-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="movie-details-wrapper">
            <p id="cast-text">
              <span>Cast :</span> Jennifer Lopez, Mars Shelley
            </p>
            <p id="genre-text">
              <span>Genre :</span> Action, Mystery
            </p>
            <p id="tag-text">
              <span>Tag :</span> Brother, Hero, Premiere, viking
            </p>
          </div>
        </div>
        <div className="carousel-img-wrapper">
          <img src="http://streamlab.gentechtree.com/red-demo/wp-content/uploads/sites/2/2019/03/5.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
