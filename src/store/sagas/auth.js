
import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import {delay} from 'redux-saga';
// these are called generators which are similar to functions and returns something after(actions) sometime and not immediately

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
	yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    //  just dispatches action 
	yield put(actions.logoutSucceed());
}


export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000)
	yield put (actions.logout());
}