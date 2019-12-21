import React, {useState, useContext, useEffect} from 'react'

import BudgetContext from '../../context/budget/budgetContext'

const BudgetForm = (props) => {
	const budgetContext = useContext(BudgetContext)
	const [name,setName]  = useState({
		name: '',
	})
	
	const {login, isAuthenticated} = authContext

	useEffect(() => {
		if(isAuthenticated) {
			props.history.push('/')
		}
	},[isAuthenticated, props.history])

	const onChange = e => setUser({...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();
		if (email === '' || password === '' ) {
			setErrorMessage('Please fill out all fields')
			setError(true)
		}  else {
			setError(false)
			login({email,password})
			console.log('Login user')
		}
	}
	return (
		<div className="container">
			<div className="col-sm-8 offset-sm-2">
				<h1 className="mt-4">Login</h1>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input 
							className="form-control"
							type="name" 
							name="name" 
							value={name}
							onChange={onChange}/>
					</div>
					<input type="submit" value="Login" className="btn btn-primary btn-block"/>
				</form>
			</div>
		</div>
	)
}
export default BudgetForm;