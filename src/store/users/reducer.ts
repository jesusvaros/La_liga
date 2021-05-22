import { UsersActions, UsersState, postTypes } from "./types";

const initialState: UsersState = {
  pending: false,
  usersResponse: undefined,
  error: null,
  detailUser: undefined,
};

const UserReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case postTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        usersResponse: action.payload.users,
        error: null,
      };
    case postTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    // Get user by Id
    case postTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case postTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        detailUser: action.payload.user,
        error: null,
      };
    case postTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default UserReducer;
