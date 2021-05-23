import { getToken, setToken } from "../../storage";
import { AuthActions, AuthState, authTypes } from "./types";

const initialState: AuthState = {
  pending: false,
  error: null,
  token: getToken(),
};

const AuthReducer = (state = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case authTypes.POST_AUTH_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case authTypes.POST_AUTH_SUCCESS:
      setToken(action.payload.token);
      return {
        ...state,
        pending: false,
        token: action.payload.token,
        error: null,
      };
    case authTypes.POST_AUTH_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    case authTypes.AUTH_LOG_OUT:
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
export default AuthReducer;
