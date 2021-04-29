import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "../styles/Home.module.scss";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { getData } from "./store/actions/actions";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  );
}

export default Home;
