import React, {useState} from 'react'

const Register = () => {
	const [user,setUser]  = useState({
		name: '',
		email: '',
		password:'',
		password2:''
	})

	const {name, email, password, password2} = user

	const onChange = e => setUser({...user, [e.target.name]: e.target.value })

	const onSubmit = e => {
		e.preventDefault();
		console.log('Register submit')
	}
	return (
		<div className="container">
			<div className="col-sm-8 offset-sm-2">
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
							onChange={onChange}/>
					</div>

					<div className="form-group">
						<label htmlFor="password2">Confirm Password</label>
						<input 
							className="form-control"
							type="password" 
							name="password2" 
							value={password2}
							onChange={onChange}/>
					</div>
					<input type="submit" value="Register" className="btn btn-primary btn-block"/>
				</form>
			</div>
		</div>
	)
}
export default Register;