const initialStateSearchField = {
  searchField: "",
};

export const searchFieldReducer = (
  state = initialStateSearchField,
  action = {}
) => {
  switch (action.type) {
    case "CHANGE_SEARCH_FIELD":
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

const intitalStateRobots = {
  robots: [],
};

export const fetchRobotsReducer = (state = intitalStateRobots, action = {}) => {
  switch (action.type) {
    case "FETCH_ROBOTS_PENDING":
      return { ...state, isPending: true };
    case "FETCH_ROBOTS_SUCCESS":
      return { ...state, isPending: false, robots: action.payload };
    case "FETCH_ROBOTS_FAILED":
      return { ...state, isPending: false, error: action.payload };
    default:
      return state;
  }
};
