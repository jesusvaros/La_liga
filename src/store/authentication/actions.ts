import { FailurePayload } from "../users/types";
import {
  authTypes,
  PostAuthFailure,
  PostAuthSuccess,
  PostAuthRequest,
  PostAuthRequestPayload,
  PostAuthSuccessPayload,
} from "./types";

export const postAuthRequest = (
  payload: PostAuthRequestPayload
): PostAuthRequest => ({
  type: authTypes.POST_AUTH_REQUEST,
  payload,
});

export const postAuthSuccess = (
  payload: PostAuthSuccessPayload
): PostAuthSuccess => ({
  type: authTypes.POST_AUTH_SUCCESS,
  payload,
});

export const postAuthFailure = (payload: FailurePayload): PostAuthFailure => ({
  type: authTypes.POST_AUTH_FAILURE,
  payload,
});

export const authLogOut = () => ({
  type: authTypes.AUTH_LOG_OUT,
});
