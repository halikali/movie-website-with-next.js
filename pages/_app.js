import { Provider } from "react-redux";
import "../styles/reset.scss";
import "../styles/globals.scss";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.min.css";
import store from "./store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
