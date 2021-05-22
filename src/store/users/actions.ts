import {
  postTypes,
  FetchUsersFailurePayload,
  FetchUsersFailure,
  FetchUsersSuccessPayload,
  FetchUsersSuccess,
  FetchUsersRequestPayload,
  FetchUsersRequest,
  //
  FetchUserFailurePayload,
  FetchUserFailure,
  FetchUserSuccessPayload,
  FetchUserSuccess,
  FetchUserRequestPayload,
  FetchUserRequest,
} from "./types";

//get all users

export const fetchUsersRequest = (
  payload: FetchUsersRequestPayload
): FetchUsersRequest => ({
  type: postTypes.FETCH_USERS_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: postTypes.FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: postTypes.FETCH_USERS_FAILURE,
  payload,
});

// Get user by id

export const fetchUserRequest = (
  payload: FetchUserRequestPayload
): FetchUserRequest => ({
  type: postTypes.FETCH_USER_REQUEST,
  payload,
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: postTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: postTypes.FETCH_USER_FAILURE,
  payload,
});
