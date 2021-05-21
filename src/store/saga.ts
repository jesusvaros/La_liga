import { all, fork } from "@redux-saga/core/effects";
import usersSaga from "./users/sagas";

export function* rootSaga() {
  yield all([fork(usersSaga)]);
}
