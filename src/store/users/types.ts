import { User } from "./models";

export enum postTypes {
  FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export interface UsersState {
  pending: boolean;
  users: User[];
  error: string | null;
}

export interface FetchUsersSuccessPayload {
  users: User[];
}

export interface FetchUsersFailurePayload {
  error: string;
}

export interface FetchUsersRequest {
  type: typeof postTypes.FETCH_USER_REQUEST;
}

export type FetchUsersSuccess = {
  type: typeof postTypes.FETCH_USER_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof postTypes.FETCH_USER_FAILURE;
  payload: FetchUsersFailurePayload;
};

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure;
