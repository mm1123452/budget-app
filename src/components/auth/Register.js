import React, {useState} from 'react'
import ErrorComponent from '../error/Error.js'
import {register} from '../../api/api'

const Register = () => {
	const [user,setUser]  = useState({
		name: '',
		email: '',
		password:'',
		password2:''
	})
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')

	const {name, email, password, password2} = user

	const onChange = e => setUser({...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();
		if (name === '' || email === '' || password === '' || password2 === '' ) {
			setErrorMessage('Please fill out all fields')
			setError(true)
		} else if (password !== password2) {
			setErrorMessage('Password must match')
			setError(true)
		} else {
			setError(false)
			const data = {name,email,password}
			register(data)
			console.log('Register submit')
		}		
	}

	return (
		<div className="container">
			<div className="col-sm-8 offset-sm-2">
				{error && <ErrorComponent message={errorMessage}/>}
				<h1 className="mt-4">Register</h1>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input 
							className="form-control"
							type="text" 
							name="name" 
							value={name}
							onChange={onChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input 
							className="form-control"
							type="email" 
							name="email" 
							value={email}
							onChange={onChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input 
							className="form-control"
							type="password" 
							name="password" 
							value={password}
							onChange={onChange}
							minLength="6"/>
					</div>

					<div className="form-group">
						<label htmlFor="password2">Confirm Password</label>
						<input 
							className="form-control"
							type="password" 
							name="password2" 
							value={password2}
							onChange={onChange}
							minLength="6"/>
					</div>
					<input type="submit" value="Register" className="btn btn-primary btn-block"/>
				</form>
			</div>
		</div>
	)
}
export default Register;