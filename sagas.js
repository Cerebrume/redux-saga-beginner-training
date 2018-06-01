import { delay } from 'redux-saga'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export function* helloSaga() {
  console.log('Hello Saga!')
}

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* decrementAcync() {
  yield call(delay, 1000)
  yield put({type: 'DECREMENT'})
}

export function* watchDecrementAsync() {
  yield takeEvery('DECREMENT_ASYNC', decrementAcync)
}

const api = (user) => fetch(`https://api.github.com/users/${user}`).then(response => response.json())

function* requestGithubUser() {
  yield takeLatest('REQUES_GITHUB_USER', function* () {
  try {
    const user = yield call(api, 'Cerebrume')
    yield put({type: 'LOG_USER', payload: user})
  } catch (e) {
      return console.error(e);
  }
  })
}
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync(),
    watchDecrementAsync(),
    requestGithubUser()
  ]
}
