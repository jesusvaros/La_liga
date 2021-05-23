import { FailurePayload } from "../users/types";

export enum authTypes {
  POST_AUTH_REQUEST = "POST_AUTH_REQUEST",
  POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS",
  POST_AUTH_FAILURE = "POST_AUTH_FAILURE",
  AUTH_LOG_OUT = "AUTH_LOG_OUT",
  REMOVE_AUTH_ERROR = "REMOVE_AUTH_ERROR",
}

export interface AuthState {
  pending: boolean;
  error: string | null;
  token: string | null;
}

export interface PostAuthRequestPayload {
  email: string;
  password: string;
}
export interface PostAuthSuccessPayload {
  token: string;
}

export interface PostAuthRequest {
  type: typeof authTypes.POST_AUTH_REQUEST;
  payload: PostAuthRequestPayload;
}

export type PostAuthSuccess = {
  type: typeof authTypes.POST_AUTH_SUCCESS;
  payload: PostAuthSuccessPayload;
};

export type PostAuthFailure = {
  type: typeof authTypes.POST_AUTH_FAILURE;
  payload: FailurePayload;
};

export type AuthLogOut = {
  type: typeof authTypes.AUTH_LOG_OUT;
};

export type RemoveAuthError = {
  type: typeof authTypes.REMOVE_AUTH_ERROR;
};

export type AuthActions =
  | PostAuthRequest
  | PostAuthSuccess
  | PostAuthFailure
  | AuthLogOut
  | RemoveAuthError;
