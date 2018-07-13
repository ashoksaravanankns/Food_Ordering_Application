import * as actions from '../actions/burgerBuilder';
import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';

export function* initIngredientsSaga(action) {
	try {
		const response = yield axios.get('https://food-order-application-8958b.firebaseio.com/ingredients.json');
		yield put(actions.setIngredients(response.data));
	} catch (error) {
		yield put(actions.fetchIngredientsFailed());
	}
}
