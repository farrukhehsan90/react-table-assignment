import { all, fork } from 'redux-saga/effects';
import { watchData } from './news';

export default function* rootSaga() {
    yield all([
        fork(watchData)
    ]);
};