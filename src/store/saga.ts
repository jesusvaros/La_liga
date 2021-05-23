import { all, fork } from "@redux-saga/core/effects";
import authSaga from "./authentication/sagas";
import usersSaga from "./users/sagas";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
  yield all([fork(authSaga)]);
}
