export const getPopularMovies = () => {
  return (dispatch) => {
    dispatch({ type: "GET_POPULAR_MOVIES_REQUEST" });
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.NEXT_PUBLIC_GAID_API_KEY}&language=tr-TR&page=1`
    )
      .then((response) => response.json())
      .then((data) =>
        dispatch({ type: "GET_POPULAR_MOVIES_SUCCESS", payload: data })
      )
      .catch((error) =>
        dispatch({ type: "GET_POPULAR_MOVIES_ERROR", payload: error })
      );
  };
};
