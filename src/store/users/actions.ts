import {
  postTypes,
  FetchUsersFailurePayload,
  FetchUsersFailure,
  FetchUsersSuccessPayload,
  FetchUsersSuccess,
  FetchUsersRequestPayload,
  FetchUsersRequest,
} from "./types";

export const fetchUsersRequest = (
  payload: FetchUsersRequestPayload
): FetchUsersRequest => ({
  type: postTypes.FETCH_USER_REQUEST,
  payload,
});

export const fetchUsersSuccess = (
  payload: FetchUsersSuccessPayload
): FetchUsersSuccess => ({
  type: postTypes.FETCH_USER_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: FetchUsersFailurePayload
): FetchUsersFailure => ({
  type: postTypes.FETCH_USER_FAILURE,
  payload,
});
