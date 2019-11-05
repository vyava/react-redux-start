import {
    NEWS_RECEIVED,
    GET_NEWS,
    BUTTON_PENDING,
    BUTTON_SUCCESS,
    BUTTON_ERROR
    // BUTTON_SUCCESS
} from "../actions/constants";
import {
    put,
    takeLatest,
    all,
    // delay,
    retry
} from 'redux-saga/effects';

async function callApi(){
    console.log("deneme")
    throw new Error("Deneme")
    // return await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1').then(res => res.json())
}

function* fetchNews() {
    try {
        yield put({ type : BUTTON_PENDING })
        // yield delay(10000)
        const json = yield retry(5, 1000, callApi);
            // .then(response => response.json());

        yield put({ type: NEWS_RECEIVED, payload: json });
        yield put({ type : BUTTON_SUCCESS })
    } catch (error) {
        yield put({type : BUTTON_ERROR})
    }
    
}

function* actionWatcher() {
    yield takeLatest(GET_NEWS, fetchNews)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}