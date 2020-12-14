import { actionTypes } from '../actions'

const initialState = {
	loading: true,
	filtered: [],
}

export default (state=initialState, action) => {
	let filtered = [];
	switch(action.type){
		case actionTypes.HOME_LIST:
			for(let i of action.payload){
				filtered.push(i.id);
			}
			return Object.assign({}, state, {filtered, loading: false});
		default:
			return state;
	}
}