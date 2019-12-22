import React, {useReducer, useContext} from 'react'
import budgetContext from './budgetContext'
import budgetReducer from './budgetReducer'
import AuthContext from '../auth/authContext'
import {CREATE_BUDGET,ADD_BUDGET_ITEM,DELETE_BUDGET_ITEM,UPDATE_BUDGET_ITEM,GET_BUDGET } from '../types'

const BudgetState = props => {
	const initialState = {
		budget: []
	}
	const [state, dispatch] = useReducer(budgetReducer, initialState)

	const authContext = useContext(AuthContext)

	const {token} = authContext


	//TODO refactor
	const createRequest  = (url,method, data, token) => {
		console.log(token)
		let customHeader = new Headers({'Content-Type': 'application/json'})

		if (token) {
			customHeader.append('x-auth-token', token)
		} else {
			customHeader.delete('x-auth-token')
		}

		console.log(customHeader)

		const myInit = {
			method: method,
			body: data ? JSON.stringify(data): null,
			headers: customHeader
		}
		return fetch(url,myInit)
	}

	const createBudget = async (budgetData) => {
		console.log(token)
		try {
			const response = await createRequest('api/budget','POST',budgetData, token)
			const data = await response.json()

			if (!response.ok) {
				    throw new Error(data.msg);
			}
			console.log(response)
			console.log(data)

			dispatch({type: CREATE_BUDGET, payload:data })

		} catch (err) {
			console.log(err)
		}		
	}


	const getAllBudget = async () => {
	    try {
	    	const response = await createRequest('/api/budget', 'GET', null, token);
		 	const data = await response.json()

			if (!response.ok) {
				    throw new Error(data.msg);
			}

			console.log(response)
			console.log(data)

	      dispatch({type: GET_BUDGET, payload: data});
	    } catch (err) {
	      	console.log(err)
	    }
	};


	return (
		<budgetContext.Provider
			value={{
				budget: state.budget,
				createBudget,
				getAllBudget
			}}>
			{props.children}
		</budgetContext.Provider>
	)
}

export default BudgetState;