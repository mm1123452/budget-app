import {CREATE_BUDGET, GET_BUDGET } from '../types'

export default (state, action) => {
	switch(action.type) {
		case CREATE_BUDGET:
			return {
			  ...state,
			  budget:[...state.budget, action.payload],
			  loading:false
			}
		case GET_BUDGET:
			return {
			  ...state,
			  budget:action.payload,
			  loading:false
			}
		default:
			return state;
	}
}