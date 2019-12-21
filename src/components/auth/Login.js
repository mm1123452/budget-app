import React, {useState, useContext, useEffect} from 'react'
import ErrorComponent from '../error/Error.js'
import AuthContext from '../../context/auth/authContext'


const Login = (props) => {
	const authContext = useContext(AuthContext)
	const [user,setUser]  = useState({
		email: '',
		password:'',
	})
	const [error, setError] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const { email, password} = user

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
				{error && <ErrorComponent message={errorMessage}/>}
				<h1 className="mt-4">Login</h1>
				<form onSubmit={onSubmit}>
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
							onChange={onChange}/>
					</div>
					<input type="submit" value="Login" className="btn btn-primary btn-block"/>
				</form>
			</div>
		</div>
	)
}
export default Login;