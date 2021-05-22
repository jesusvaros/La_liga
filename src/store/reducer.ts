import { combineReducers } from "redux";

import userReducer from "../store/users/reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  users: userReducer,
  form: formReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
