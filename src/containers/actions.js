import actionType from "./actionType";

const changeSearchField = (text) => ({
  type: actionType.CHANGE_SEARCH_FIELD,
  payload: text,
});

export default changeSearchField;
