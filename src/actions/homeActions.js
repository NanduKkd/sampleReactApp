import {actionTypes} from './actionTypes'

import {dataList, details} from '../utils/data';

const refreshHomes = (options={}) => {
	return async dispatch => {
		dispatch({type: actionTypes.HOME_LOADING})
		const payload = await dataList(options);
		dispatch({type: actionTypes.HOME_LIST, payload})
	}
}

const homeDetails = (id) => {
	return async dispatch => {
		dispatch({type: actionTypes.HOME_LOADING})
		const payload = {...await details(id), details: true};
		dispatch({type: actionTypes.HOME_DETAILS, payload})
	}
}

export const homeActions = {
	refreshHomes, homeDetails
}