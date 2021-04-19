const initialState = {
  data: [],
};

const denemeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_REQUEST":
      return {
        ...state,
      };
    case "GET_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_DATA_ERROR":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default denemeReducer;
