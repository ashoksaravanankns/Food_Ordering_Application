import * as actionTypes from './actionTypes';
import axios from 'axios';

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


export const logout = ()=>{
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}
export const checkAuthTime = (expirationTime)=>{
    return dispatch =>{
       setTimeout(()=>{
        dispatch(logout())
       },expirationTime*1000)
    }
}

export const auth = (email, password, isSignUp) => {
	return (dispatch) => {
		dispatch(authStart());
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		};
		let url =
			'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAFkWTkKlohVTBhCHF5PIQ18yfGNaaC5yI';
		if (!isSignUp) {
			url =
				'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyAFkWTkKlohVTBhCHF5PIQ18yfGNaaC5yI';
		}
		axios
			.post(url, authData)
			.then((response) => {
				console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
				dispatch(checkAuthTime(response.data.expiresIn));
                
			})
			.catch((error) => {
				console.log(error);
				dispatch(authFail(error.response.data.error));
			});
	};
};


