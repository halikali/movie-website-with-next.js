import popularMoviesReducer from "./popularMoviesReducer";

const initialState = {
  data: [],
};

const popularMoviesDailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULAR_MOVIES_DAILY_SUCCESS":
      return { ...state, data: action.payload };
    case "GET_POPULAR_MOVIES_DAILY_ERROR":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default popularMoviesDailyReducer;
