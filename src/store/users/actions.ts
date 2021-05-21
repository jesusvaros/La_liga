import {
  postTypes,
  FetchUsersFailurePayload,
  FetchUsersFailure,
  FetchUsersSuccessPayload,
  FetchUsersSuccess,
} from "./types";

export const fetchUsersRequest = () => ({
  type: postTypes.FETCH_USER_REQUEST,
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
