import React, {useReducer, useContext} from 'react'
import budgetContext from './budgetContext'
import budgetReducer from './budgetReducer'
import AuthContext from '../auth/authContext'
import {CREATE_BUDGET,ADD_BUDGET_ITEM,DELETE_BUDGET_ITEM,UPDATE_BUDGET_ITEM,GET_ALL_BUDGET, GET_ONE_BUDGET} from '../types'

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
		//console.log(token)
		try {
			const response = await createRequest('api/budget','POST',budgetData)
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
	    	const response = await createRequest('/api/budget', 'GET', null,token);
		 	const data = await response.json()

			if (!response.ok) {
				    throw new Error(data.msg);
			}
			console.log(response)
			console.log(data)

	      dispatch({type: GET_ALL_BUDGET, payload: data});
	    } catch (err) {
	      	console.log(err)
	    }
	};

	const getOneBudget = async (id) => {
		try {
			const response = await createRequest(`/api/budget/${id}`, 'GET', null,token);
			const data = await response.json()

			if (!response.ok) {
				    throw new Error(data.msg);
			}
			console.log(response)
			console.log(data)
		  	dispatch({type: GET_ONE_BUDGET, payload: data});
	    } catch (err) {
	      	console.log(err)
	    }
	}

	const addBudgetItem = async (budgetItem) => {
		const {id} = budgetItem
		console.log(budgetItem)
	    try {
	    	const response = await createRequest(`/api/budget/${id}`, 'POST', budgetItem.budgetItem,token);
		 	const data = await response.json()

			if (!response.ok) {
				    throw new Error(data.msg);
			}
			console.log(response)
			console.log(data)

	      dispatch({type: ADD_BUDGET_ITEM, payload: data});
	    } catch (err) {
	      	console.log(err)
	    }
	};

	return (
		<budgetContext.Provider
			value={{
				budget: state.budget,
				createBudget,
				getAllBudget,
				addBudgetItem,
				getOneBudget 
			}}>
			{props.children}
		</budgetContext.Provider>
	)
}

export default BudgetState;