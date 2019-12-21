import React, {useReducer} from 'react'
import authContext from './authContext'
import authReducer from './authReducer'
import {
	REGISTER_SUCCESS,REGISTER_FAIL,USER_LOADED,
	AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT
} from '../types'

const AuthState = props => {
	const initialState = {
		token: localStorage.getItem('token'),
		isAuthenticated: null,
		loading: true,
		user:null,
		error: null
	}
	const [state, dispatch] = useReducer(authReducer, initialState)

	//TODO refactor
	const createRequest  = (url,method, data, token) => {
		let customHeader = new Headers({'Content-Type': 'application/json'})

		if (token) {
			customHeader.append('x-auth-token', token)
		} else {
			customHeader.delete('x-auth-token')
		}

		const myInit = {
			method: method,
			body: data ? JSON.stringify(data): null,
			headers: customHeader
		}
		return fetch(url,myInit)
	}

	const register = async (userData) => {
		try {
			const response = await createRequest('api/users','POST',userData)
			const data = await response.json()
			console.log(response)
			console.log(data)

			dispatch({
				type: REGISTER_SUCCESS,
				payload: data
			})

			loadUser(localStorage.getItem('token'))
		} catch (err) {
			console.error(err)
			dispatch({
				type: REGISTER_FAIL,
				payload: err.response
			})
		}
	}

	const login = async (userData) => {
		try {
			const response = await createRequest('api/auth','POST',userData)
			const data = await response.json()
			console.log(response)
			console.log(data)

			dispatch({
				type: LOGIN_SUCCESS,
				payload: data
			})

			loadUser(localStorage.getItem('token'))
		} catch (err) {
			console.error(err)
			dispatch({
				type: LOGIN_FAIL,
				payload: err.response
			})
		}
	}


	const loadUser = async (token) => {
		try {
			const response = await createRequest('api/auth','GET',null,token)
			const data = await response.json()
			console.log(response)
			console.log(data)

			dispatch({
				type: USER_LOADED,
				payload: data
			})
		} catch (err) {
			console.error(err)
			dispatch({
				type: AUTH_ERROR
			})
		}
	}

	const logout = async (token) => {dispatch({type: LOGOUT})}

	return (
		<authContext.Provider
			value={{
				token: state.token,
				isAuthenticated: state.isAuthenticated,
				user: state.user,
				loading: state.loading,
				error: state.error,
				register,
				loadUser,
				login, 
				logout
			}}>
			{props.children}
		</authContext.Provider>
	)
}

export default AuthState;