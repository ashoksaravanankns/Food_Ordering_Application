import * as actionTypes from '../actions/actionTypes';

import { takeEvery, all,takeLatest } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './orders';

export function* watchAuth() {
	yield all([
		takeEvery(actionTypes.AUTH_CHECK_INITIAL_STATE, authCheckStateSaga),
		takeEvery(actionTypes.CHECK_AUTH_TIMEOUT, checkAuthTimeoutSaga),
		takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
		takeEvery(actionTypes.AUTH_USER, authUserSaga)
	]);
}

export function* watchIngredients() {
	yield takeEvery(actionTypes.CHECK_INGREDIENTS, initIngredientsSaga);
}

// https://redux-saga.js.org/docs/api/
// takeLatest will have the latest action dispatched terminating any old on going actions

export function* watchOrders() {
	yield all([
		takeLatest(actionTypes.CHECK_PURCHASE_BURGER, purchaseBurgerSaga),
		takeEvery(actionTypes.CHECK_FETCH_ORDERS, fetchOrdersSaga)
	]);
}
