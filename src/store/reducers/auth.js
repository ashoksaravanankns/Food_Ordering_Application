import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
	token: null,
	useId: null,
	error: null,
	loading: false,
	authRedirectpath: '/'
};

const authStart = (state, action) => {
	return updateObject(state, { error: null, loading: true });
};

const setAuthRedirectPath = (state, action) => {
	return updateObject(state, { authRedirectpath: action.path });
};

const authSuccess = (state, action) => {
	return updateObject(state, { error: null, loading: false, token: action.idToken, userId: action.userId });
};

const authFail = (state, action) => {
	return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state, action) => {
	return updateObject(state, { token: null, userId: null });
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.AUTH_START:
			return authStart(state, action);
		case actionTypes.AUTH_SUCCESS:
			return authSuccess(state, action);

		case actionTypes.AUTH_FAIL:
			return authFail(state, action);

		case actionTypes.AUTH_LOGOUT:
			return authLogout(state, action);
		case actionTypes.SET_AUTH_REDIRECT_PATH:
			return setAuthRedirectPath(state, action);
		default:
			return state;
	}
};

export default reducer;
