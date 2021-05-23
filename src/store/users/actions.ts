import {
  userTypes,
  // Get all users
  FetchUsersFailurePayload,
  FetchUsersFailure,
  FetchUsersSuccessPayload,
  FetchUsersSuccess,
  FetchUsersRequestPayload,
  FetchUsersRequest,
  // Get user by id
  FetchUserFailurePayload,
  FetchUserFailure,
  FetchUserSuccessPayload,
  FetchUserSuccess,
  FetchUserRequestPayload,
  FetchUserRequest,
  // Edit user
  EditUserRequestPayload,
  EditUserRequest,
  EditUserSuccessPayload,
  EditUserSuccess,
  EditUserFailurePayload,
  EditUserFailure,
  //Delete user
  DeleteUserRequestPayload,
  DeleteUserRequest,
  DeleteUserSuccessPayload,
  DeleteUserSuccess,
  DeleteUserFailurePayload,
  DeleteUserFailure,
} from "./types";

// Get all users

export const fetchUsersRequest = (
  payload: FetchUsersRequestPayload
): FetchUsersRequest => ({
  type: userTypes.FETCH_USERS_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: userTypes.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: userTypes.FETCH_USERS_FAILURE,
  payload,
});

// Get user by id

export const fetchUserRequest = (
  payload: FetchUserRequestPayload
): FetchUserRequest => ({
  type: userTypes.FETCH_USER_REQUEST,
  payload,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: userTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: userTypes.FETCH_USER_FAILURE,
  payload,
});

// Edit user

export const editUserRequest = (
  payload: EditUserRequestPayload
): EditUserRequest => ({
  type: userTypes.EDIT_USER_REQUEST,
  payload,
});

export const editUserSuccess = (
  payload: EditUserSuccessPayload
): EditUserSuccess => ({
  type: userTypes.EDIT_USER_SUCCESS,
  payload,
});

export const editUserFailure = (
  payload: EditUserFailurePayload
): EditUserFailure => ({
  type: userTypes.EDIT_USER_FAILURE,
  payload,
});

export const setSubmittedFalse = () => ({
  type: userTypes.SET_EDIT_USER_FALSE,
});

// Delete user

export const deleteUserRequest = (
  payload: DeleteUserRequestPayload
): DeleteUserRequest => ({
  type: userTypes.DELETE_USER_REQUEST,
  payload,
});

export const deleteUserSuccess = (
  payload: DeleteUserSuccessPayload
): DeleteUserSuccess => ({
  type: userTypes.DELETE_USER_SUCCESS,
  payload,
});

export const deleteUserFailure = (
  payload: DeleteUserFailurePayload
): DeleteUserFailure => ({
  type: userTypes.DELETE_USER_FAILURE,
  payload,
});
