import * as actionTypes from '../actions/actionTypes';
import axios from '../../axios-orders';

export const orderSuccess = (id, orderData) => {
	return {
		type: actionTypes.ORDER_SUCCESS,
		orderId: id,
		orderData: orderData
	};
};

export const orderFailed = (error) => {
	return {
		type: actionTypes.ORDER_FAILED,
		error: error
	};
};
export const purchaseBurgerStart = () => {
	return {
		type: actionTypes.PURCHASE_BURGER_START
	};
};
export const purchaseBurger = (orderData) => {
	return (dispatch) => {
		dispatch(purchaseBurgerStart());
		axios
			.post('/orders.json', orderData)
			.then((response) => {
				dispatch(orderSuccess(response.data.name));
			})
			.catch((error) => {
				dispatch(orderFailed(error));
			});
	};
};
