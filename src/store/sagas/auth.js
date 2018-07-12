import * as actionTypes from '../actions/actionTypes';
import {put} from 'redux-saga/effects';

// these are called generators which are similar to functions and returns something after(actions) sometime and not immediately

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
	yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    //  just dispatches action 
	yield put ({
		type: actionTypes.AUTH_LOGOUT
	});

}