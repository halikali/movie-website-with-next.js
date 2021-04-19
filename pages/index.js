import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import First from "./Components/First/First";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./store/actions/actions";

function Home({ data }) {
  const paul = useSelector((state) => state.denemeReducer.data);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(paul);
    dispatch(getData());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/deneme">Deneme</Link>
      {data && data.map((item) => <p key={item}>{item}</p>)}

      {paul &&
        Object.entries(paul).map(
          (item, index) => console.log(item)
          // <p key={index}>{item}</p>
        )}
      <First />
    </div>
  );
}

export const getServerSideProps = async () => {
  const data = ["veri 1", "veri 2", "adana", "Bursa", "Eskişehir", "İstanbul"];
  return {
    props: {
      data,
    },
  };
};

export default Home;
