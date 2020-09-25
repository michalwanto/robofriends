import actionType from "./actionType";

export const changeSearchField = (text) => ({
  type: actionType.CHANGE_SEARCH_FIELD,
  payload: text,
});

export const fetchRobots = () => (dispatch) => {
  dispatch({ type: actionType.FETCH_ROBOTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      dispatch({ type: actionType.FETCH_ROBOTS_SUCCESS, payload: users })
    )
    .catch((err) =>
      dispatch({ type: actionType.FETCH_ROBOTS_FAILED, payload: err })
    );
};
