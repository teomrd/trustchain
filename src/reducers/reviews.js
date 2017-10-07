const initialState = {
  some: "thing"
};

const reviews = (state = initialState, action) => {
  switch (action.type) {
    case "PROFILE_REQUEST_LOG_OUT_SUCCESS":
      return initialState;
    default:
      return state;
  }
};

export default reviews;
