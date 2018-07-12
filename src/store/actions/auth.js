

import * as actionTypes from './actionTypes';

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token, userId) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		idToken: token,
		userId: userId
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const logout = () => {
	// localStorage.removeItem('token');
	// localStorage.removeItem('expirationDate');
	// localStorage.removeItem('userId');
	return {
		type: actionTypes.AUTH_INITIATE_LOGOUT
	};
};


export const logoutSucceed = ()=>{
	return {
		type: actionTypes.AUTH_LOGOUT
	}
}

export const checkAuthTimeout = (expirationTime) => {
	return {
		type: actionTypes.CHECK_AUTH_TIMEOUT,
		expirationTime:expirationTime
	};
};

export const auth = (email, password, isSignup) => {
	return {
		type:actionTypes.AUTH_USER,
		email:email,
		password:password,
		isSignup:isSignup,
	};
};

export const setAuthRedirectPath = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};

export const authCheckState = () => {
	return{
		type:actionTypes.AUTH_CHECK_INITIAL_STATE
	}
};
