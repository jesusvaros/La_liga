import { UsersActions, UsersState, userTypes } from "./types";

const initialState: UsersState = {
  pending: false,
  users: undefined,
  error: null,
  detailUser: undefined,
  submitted: false,
};

const UserReducer = (
  state = initialState,
  action: UsersActions
): UsersState => {
  switch (action.type) {
    case userTypes.FETCH_USERS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case userTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };
    // Get user by Id
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        detailUser: action.payload.user,
        error: null,
      };
    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload.error,
      };

    // Edit user
    case userTypes.EDIT_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case userTypes.EDIT_USER_SUCCESS:
      const users = state.users
        ? state.users.data.map((user) =>
            user.id === action.payload.user.id ? action.payload.user : user
          )
        : [];
      return {
        ...state,
        pending: false,
        users: state.users ? { ...state.users, data: users } : undefined,
        submitted: true,
        error: null,
      };
    case userTypes.SET_EDIT_USER_FALSE:
      return {
        ...state,
        submitted: false,
      };
    case userTypes.EDIT_USER_FAILURE:
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
