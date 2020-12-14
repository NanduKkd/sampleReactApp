import { actionTypes } from '../actions'

const initialState = {
	loading: true,
	error: null,
	data: null,
}

const reducer = (state=initialState, action) => {
	switch(action.type){
		case actionTypes.USER_LOGIN:
			return Object.assign({}, state, {
				data: action.payload,
				loading: false,
				error: false,
			});
		case actionTypes.USER_ERROR:
			return Object.assign({}, state, {
				data: null,
				loading: false,
				error: action.error
			});
		case actionTypes.USER_LOGOUT:
			return Object.assign({}, state, {
				data: null,
				loading: false,
				error: null,
			})
		case actionTypes.USER_LOADING:
			return Object.assign({}, state, {
				error: null,
				loading: true,
				data: null,
			});
		default: return state;
	}
}

export default reducer