import { GetUsersResponse, User } from "./models";

export enum postTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",

  FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
}

export interface UsersState {
  pending: boolean;
  usersResponse: GetUsersResponse | undefined;
  error: string | null;
  detailUser: { data: User } | undefined;
}

// Get all users
export interface FetchUsersRequestPayload {
  page: number;
}
export interface FetchUsersSuccessPayload {
  users: GetUsersResponse;
}

export interface FetchUsersFailurePayload {
  error: string;
}
export interface FetchUsersRequest {
  type: typeof postTypes.FETCH_USERS_REQUEST;
  payload: FetchUsersRequestPayload;
}

export type FetchUsersSuccess = {
  type: typeof postTypes.FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof postTypes.FETCH_USERS_FAILURE;
  payload: FetchUsersFailurePayload;
};

// Get user by id

export interface FetchUserRequestPayload {
  id: number;
}
export interface FetchUserSuccessPayload {
  user: { data: User };
}

export interface FetchUserFailurePayload {
  error: string;
}

export interface FetchUserRequest {
  type: typeof postTypes.FETCH_USER_REQUEST;
  payload: FetchUserRequestPayload;
}

export type FetchUserSuccess = {
  type: typeof postTypes.FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof postTypes.FETCH_USER_FAILURE;
  payload: FetchUserFailurePayload;
};

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure;
