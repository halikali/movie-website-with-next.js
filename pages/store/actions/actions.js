export const getData = () => {
  return (dispatch) => {
    dispatch({ type: "GET_DATA_REQUEST" });
    fetch("https://picsum.photos/id/10/info")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_DATA_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "GET_DATA_ERROR", payload: error }));
  };
};
