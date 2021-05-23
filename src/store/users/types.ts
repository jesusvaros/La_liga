import { GetUsersResponse, User } from "./models";

export enum userTypes {
  FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",

  FETCH_USER_REQUEST = "FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE = "FETCH_USER_FAILURE",

  EDIT_USER_REQUEST = "EDIT_USER_REQUEST",
  EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS",
  EDIT_USER_FAILURE = "EDIT_USER_FAILURE",
  SET_EDIT_USER_FALSE = "SET_EDIT_USER_FALSE",
  SET_USER_DEFAULT_NULL = "SET_USER_DEFAULT_NULL",

  DELETE_USER_REQUEST = "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS",
  DELETE_USER_FAILURE = "DELETE_USER_FAILURE",
}

export interface UsersState {
  pending: boolean;
  users: GetUsersResponse | undefined;
  error: string | null;
  detailUser: { data: User } | null;
  submitted: boolean;
  deleted: boolean;
}

export interface FailurePayload {
  error: string;
}

// Get all users
export interface FetchUsersRequestPayload {
  page: number;
}
export interface FetchUsersSuccessPayload {
  users: GetUsersResponse;
}

export interface FetchUsersRequest {
  type: typeof userTypes.FETCH_USERS_REQUEST;
  payload: FetchUsersRequestPayload;
}

export type FetchUsersSuccess = {
  type: typeof userTypes.FETCH_USERS_SUCCESS;
  payload: FetchUsersSuccessPayload;
};

export type FetchUsersFailure = {
  type: typeof userTypes.FETCH_USERS_FAILURE;
  payload: FailurePayload;
};

// Get user by id

export interface FetchUserRequestPayload {
  id: number;
}
export interface FetchUserSuccessPayload {
  user: { data: User };
}

export interface FetchUserRequest {
  type: typeof userTypes.FETCH_USER_REQUEST;
  payload: FetchUserRequestPayload;
}

export type FetchUserSuccess = {
  type: typeof userTypes.FETCH_USER_SUCCESS;
  payload: FetchUserSuccessPayload;
};

export type FetchUserFailure = {
  type: typeof userTypes.FETCH_USER_FAILURE;
  payload: FailurePayload;
};

export type SetUserDefaultNull = {
  type: typeof userTypes.SET_USER_DEFAULT_NULL;
};

// Edit user

export interface EditUserRequestPayload {
  id: number;
  data: {
    emai: string;
    first_name: string;
    last_name: string;
  };
}
export interface EditUserSuccessPayload {
  user: User;
}

export interface EditUserRequest {
  type: typeof userTypes.EDIT_USER_REQUEST;
  payload: EditUserRequestPayload;
}

export type EditUserSuccess = {
  type: typeof userTypes.EDIT_USER_SUCCESS;
  payload: EditUserSuccessPayload;
};

export type EditUserFailure = {
  type: typeof userTypes.EDIT_USER_FAILURE;
  payload: FailurePayload;
};

export type SetSendedFalse = {
  type: typeof userTypes.SET_EDIT_USER_FALSE;
};

// Delete user

export interface DeleteUserRequestPayload {
  id: number;
}
export interface DeleteUserSuccessPayload {
  userId: number;
}

export interface DeleteUserRequest {
  type: typeof userTypes.DELETE_USER_REQUEST;
  payload: DeleteUserRequestPayload;
}

export type DeleteUserSuccess = {
  type: typeof userTypes.DELETE_USER_SUCCESS;
  payload: DeleteUserSuccessPayload;
};

export type DeleteUserFailure = {
  type: typeof userTypes.DELETE_USER_FAILURE;
  payload: FailurePayload;
};

export type UsersActions =
  | FetchUsersRequest
  | FetchUsersSuccess
  | FetchUsersFailure
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | EditUserRequest
  | EditUserSuccess
  | EditUserFailure
  | SetSendedFalse
  | SetUserDefaultNull
  | DeleteUserRequest
  | DeleteUserSuccess
  | DeleteUserFailure;
