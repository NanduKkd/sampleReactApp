import { actionTypes } from '../actions'

const initialState = {}

export default (state=initialState, action) => {
	let obj = {};
	switch(action.type){
		case actionTypes.HOME_LIST:
			for(let i of action.payload){
				obj[i.id] = i;
			}
			return obj;
		case actionTypes.HOME_DETAILS:
			obj[action.payload.id] = action.payload;
			return Object.assign({}, state, obj);
		default:
			return state;
	}
}