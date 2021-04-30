import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";
import popularTvSeriesReducer from "./popularTvSeriesReducer";

const rootReducer = combineReducers({
  popularMoviesReducer,
  popularTvSeriesReducer,
});

export default rootReducer;
