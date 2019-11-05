import { NEWS_RECEIVED, GET_NEWS } from "../actions/constants";
import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
    const json = yield fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => console.log(json));
    yield put({ type: NEWS_RECEIVED, json: json });
}
function* actionWatcher() {
    yield takeLatest(GET_NEWS, fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}