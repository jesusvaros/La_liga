import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUserSuccess,
  fetchUserFailure,
  editUserSuccess,
  editUserFailure,
  deleteUserSuccess,
  deleteUserFailure,
} from "./actions";
import { GetUsersResponse, User } from "./models";
import {
  DeleteUserRequest,
  DeleteUserRequestPayload,
  EditUserRequest,
  EditUserRequestPayload,
  FetchUserRequest,
  FetchUsersRequest,
  userTypes,
} from "./types";

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
  axios.get<User>(`https://reqres.in/api/users/${id}`);

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

const editUser = (payload: EditUserRequestPayload) => () =>
  axios.patch<User>(`https://reqres.in/api/users/${payload.id}`, payload.data);

function* editUserSaga(action: EditUserRequest) {
  try {
    const response: AxiosResponse<User> = yield call(editUser(action.payload));
    yield put(
      editUserSuccess({ user: { ...response.data, id: action.payload.id } })
    );
  } catch (e) {
    yield put(
      editUserFailure({
        error: e.message,
      })
    );
  }
}

const deleteUser = (payload: DeleteUserRequestPayload) => () =>
  axios.delete<User>(`https://reqres.in/api/users/${payload.id}`);

function* deleteUserSaga(action: DeleteUserRequest) {
  try {
    yield call(deleteUser(action.payload));
    yield put(deleteUserSuccess({ userId: action.payload.id }));
  } catch (e) {
    yield put(
      deleteUserFailure({
        error: e.message,
      })
    );
  }
}

function* usersSaga() {
  yield all([takeLatest(userTypes.FETCH_USERS_REQUEST, fetchUsersSaga)]);
  yield all([takeLatest(userTypes.FETCH_USER_REQUEST, fetchUserSaga)]);
  yield all([takeLatest(userTypes.EDIT_USER_REQUEST, editUserSaga)]);
  yield all([takeLatest(userTypes.DELETE_USER_REQUEST, deleteUserSaga)]);
}

export default usersSaga;
