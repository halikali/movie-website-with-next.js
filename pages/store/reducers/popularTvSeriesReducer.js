const initialState = {
  data: [],
};

const popularTvSeriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULAR_TV_SERIES_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_POPULAR_TV_SERIES_ERROR":
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default popularTvSeriesReducer;
