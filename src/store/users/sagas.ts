import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserSuccess,
  fetchUserFailure,
} from "./actions";
import { GetUsersResponse } from "./models";
import { FetchUserRequest, FetchUsersRequest, postTypes } from "./types";

const getUsers = (page: number) => () =>
  axios.get<GetUsersResponse[]>(`https://reqres.in/api/users?page=${page}`);

function* fetchUsersSaga(action: FetchUsersRequest) {
  try {
    const response: AxiosResponse = yield call(getUsers(action.payload.page));
    yield put(
      fetchUsersSuccess({
        users: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUsersFailure({
        error: e.message,
      })
    );
  }
}

const getUser = (id: number) => () =>
  axios.get<GetUsersResponse[]>(`https://reqres.in/api/users/${id}`);

function* fetchUserSaga(action: FetchUserRequest) {
  try {
    const response: AxiosResponse = yield call(getUser(action.payload.id));
    yield put(
      fetchUserSuccess({
        user: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchUserFailure({
        error: e.message,
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(postTypes.FETCH_USERS_REQUEST, fetchUsersSaga)]);
  yield all([takeLatest(postTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
}

export default usersSaga;
