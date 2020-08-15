import { put, takeEvery, all } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
    console.log("hello from saga");
}

export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootsaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}


// Sagas are implemented as Generator functions that yield objects to the redux-saga middleware.