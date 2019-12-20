import React, {useReducer} from 'react'
import uuid from 'uuid'
import budgetContext from './budgetContext'
import budgetReducer from './budgetReducer'
import {CREATE_BUDGET,ADD_BUDGET_ITEM,DELETE_BUDGET_ITEM,UPDATE_BUDGET_ITEM } from '../types'

const BudgetState = props => {
	const initialState = {
		budget: [{
			id: 1,
			name: 'November',
			income: [{
				id:123,
				amount:50,
				description:'Allowance',
				type:'income'

			},{
				id:122,
				amount:500,
				description:'Salary',
				type:'income'

			}],
			expenses: [{
				id:124,
				amount:5,
				description:'Coffee',
				type:'expense'
			}]
		},{
			id: 2,
			name: 'December',
			income: [],
			expenses: []
		}]
	}
	const [state, dispatch] = useReducer(budgetReducer, initialState)

	return (
		<budgetContext.Provider
			value={{budget: state.budget}}>
			{props.children}
		</budgetContext.Provider>
	)
}

export default BudgetState;