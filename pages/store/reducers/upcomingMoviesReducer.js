const initialState = {
  data: [],
};

const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_UPCOMING_MOVIES_SUCCESS":
      return { ...state, data: action.payload };
    case "GET_UPCOMING_MOVIES_ERROR":
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default upcomingMoviesReducer;
