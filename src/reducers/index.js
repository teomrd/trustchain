import { combineReducers } from "redux";
import reviewsReducer from "./reviews";

const rootReducer = combineReducers({
  reviews: reviewsReducer
});

export default rootReducer;
