import {CREATE_BUDGET, GET_ALL_BUDGET, ADD_BUDGET_ITEM,GET_ONE_BUDGET} from '../types'

export default (state, action) => {
	switch(action.type) {
		case CREATE_BUDGET:
			return {
			  ...state,
			  budget:[...state.budget, action.payload],
			  loading:false
			}
		case GET_ONE_BUDGET:
		case GET_ALL_BUDGET:
			return {
			  ...state,
			  budget:action.payload,
			  loading:false
		}
		case ADD_BUDGET_ITEM:
		/*let newState = state.budget.map(budget => 
			budget._id === action.payload._id ?
			budget = action.payload : (budget)
		)*/		
		return {
			...state,
			 budget:action.payload,
			loading:false
		}
		default:
			return state;
	}
}