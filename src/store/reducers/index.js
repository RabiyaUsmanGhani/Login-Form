import { combineReducers } from "redux";

import * as fromlogin from "./login";

const allReducers = combineReducers({
  login: fromlogin.reducer,
  
});

export default allReducers;
