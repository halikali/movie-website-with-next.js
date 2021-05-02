import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/Home.module.scss";
import Carousel from "./Components/Carousel/Carousel";
import Footer from "./Components/Footer/Footer";
import Hits from "./Components/Hits/Hits";
import Navbar from "./Components/Navbar/Navbar";
import PopularTvSeries from "./Components/PopularTvSeries/PopularTvSeries";
import UpcomingMovies from "./Components/UpcomingMovies/UpcomingMovies";
import {
  getUpcomingMovies,
  getPopularMovies,
  getPopularMoviesDaily,
  getPopularTvSeries,
} from "./store/actions/actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularMovies());
    dispatch(getPopularTvSeries());
    dispatch(getPopularMoviesDaily());
    dispatch(getUpcomingMovies());
  }, []);
  return (
    <div className={styles.container}>
      <Navbar />
      <Carousel />
      <Hits />
      <PopularTvSeries />
      <UpcomingMovies />
    </div>
  );
}

export default Home;
