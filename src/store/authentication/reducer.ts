import { deleteToken, getToken, setToken } from "../../storage";
import { AuthActions, AuthState, authTypes } from "./types";

const initialState: AuthState = {
  pending: false,
  error: null,
  // gets the token from the local storage
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
      // remove token from the store and from the localStorage
      deleteToken();
      return {
        ...state,
        token: null,
      };
    case authTypes.REMOVE_AUTH_ERROR:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
export default AuthReducer;
