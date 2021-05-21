import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./actions";
import { GetUserResponse } from "./models";
import { postTypes } from "./types";

const getUsers = () =>
  // Add ?page={number} add the end of the endpoint to see next page
  axios.get<GetUserResponse[]>("https://reqres.in/api/users?page=2");

function* fetchUsersSaga() {
  try {
    const response: AxiosResponse = yield call(getUsers);
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
