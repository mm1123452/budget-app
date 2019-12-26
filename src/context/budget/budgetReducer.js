import {CREATE_BUDGET, GET_BUDGET, ADD_BUDGET_ITEM} from '../types'

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
		case ADD_BUDGET_ITEM:
		let newState = state.budget.map(budget => 
			budget._id === action.payload._id ?
			budget = action.payload : (budget)
		)		
		return {
			...state,
			newState,
			loading:false
		}
		default:
			return state;
	}
}