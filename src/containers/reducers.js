const initialState = {
  robots: [],
  searchField: "",
};

const searchFieldReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return initialState;
  }
};

export default searchFieldReducer;
