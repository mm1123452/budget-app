import React, {Fragment, useContext, useEffect} from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const Navbar  = () => {
	const authContext = useContext(AuthContext)

	const {logout, user, isAuthenticated, loadUser} = authContext

	useEffect(() => {
		loadUser(localStorage.getItem('token'))	
	}, [])

	const handleLogout =() => {
		logout()
	}



	const authLinks = (
		<Fragment>
			<li><Link to="/">Home</Link></li>  
			<li><a onClick={handleLogout} href="#!">Logout</a></li>  
		</Fragment>
	)

	const guestLinks = (
		<Fragment>
			<li><Link to="/register">Register</Link></li> 
	       <li><Link to="/login">Login</Link></li>
		</Fragment>
	)

return (
	<nav className="navbar navbar-dark bg-dark">
		<h3 className="title">
			<i className="fas fa-chart-pie fa-md icon"/>
			Budget App
		</h3>
		<ul>	       
	       {isAuthenticated ? authLinks : guestLinks}
	    </ul>
	</nav>
)}
export default Navbar;
	
