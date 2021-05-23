import { combineReducers } from "redux";

import userReducer from "../store/users/reducer";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authentication/reducer";

const rootReducer = combineReducers({
  users: userReducer,
  auth: authReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
