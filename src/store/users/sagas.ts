import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./actions";
import { GetUserResponse } from "./models";
import { FetchUsersRequest, postTypes } from "./types";

const getUsers = (page: number) => () =>
  axios.get<GetUserResponse[]>(`https://reqres.in/api/users?page=${page}`);

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

function* usersSaga() {
  yield all([takeLatest(postTypes.FETCH_USER_REQUEST, fetchUsersSaga)]);
}

export default usersSaga;
