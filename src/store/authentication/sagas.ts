import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { postAuthFailure, postAuthSuccess } from "./actions";
import { authTypes, PostAuthRequest, PostAuthRequestPayload } from "./types";

const postLogIn = (payload: PostAuthRequestPayload) => () =>
  axios.post(`https://reqres.in/api/login`, payload);

function* postLogInSaga(action: PostAuthRequest) {
  try {
    const response: AxiosResponse = yield call(postLogIn(action.payload));
    yield put(postAuthSuccess({ token: response.data.token }));
  } catch (e) {
    yield put(
      postAuthFailure({
        error: e.response.data.error,
      })
    );
  }
}

function* authSaga() {
  yield all([takeLatest(authTypes.POST_AUTH_REQUEST, postLogInSaga)]);
}

export default authSaga;
