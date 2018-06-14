import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    //return initial state
	it('Return initial state', () => {
		expect(reducer(undefined,{})).toEqual({
			token: null,
			userId: null,
			error: null,
			loading: false,
			authRedirectPath: '/'
		});
    });
    // get token on login
    it('Should store the token on Login', () => {
		expect(reducer({
			token: null,
			userId: null,
			error: null,
			loading: false,
			authRedirectPath: '/'
        },
        {
            type:actionTypes.AUTH_SUCCESS,
            idToken:'token',
            userId:'userId'
        })).toEqual({
            token: 'token',
			userId: 'userId',
			error: null,
			loading: false,
			authRedirectPath: '/'
        })
    })
})