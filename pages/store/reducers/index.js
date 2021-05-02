import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import popularTvSeriesReducer from "./popularTvSeriesReducer";
import popularMoviesDailyReducer from "./popularMoviesDailyReducer";
import upcomingMoviesReducer from "./upcomingMoviesReducer";
const rootReducer = combineReducers({
  popularMoviesReducer,
  popularTvSeriesReducer,
  popularMoviesDailyReducer,
  upcomingMoviesReducer,
});

export default rootReducer;
