export const getData = () => {
  return (dispatch) => {
    dispatch({ type: "GET_DATA_REQUEST" });
    fetch(
      // `https://api.themoviedb.org/3/movie/popular?api_key=ee637512b9a72e10c34a912fe88043a3&language=en-US&page=1`
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_GAID_API_KEY}&language=tr-TR&page=1`
    )
      .then((response) => response.json())
      .then((data) => dispatch({ type: "GET_DATA_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "GET_DATA_ERROR", payload: error }));
  };
};
