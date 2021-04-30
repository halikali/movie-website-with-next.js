const initialState = {
  data: [],
};

const popularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_POPULAR_MOVIES_REQUEST":
      return {
        ...state,
      };
    case "GET_POPULAR_MOVIES_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_POPULAR_MOVIES_ERROR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default popularMoviesReducer;
