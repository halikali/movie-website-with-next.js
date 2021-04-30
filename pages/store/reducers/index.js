import { combineReducers } from "redux";
import popularMoviesReducer from "./popularMoviesReducer";

const rootReducer = combineReducers({ popularMoviesReducer });

export default rootReducer;
