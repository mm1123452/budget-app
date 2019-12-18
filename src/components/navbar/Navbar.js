import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar  = () => (
	<nav className="navbar navbar-dark bg-dark">
		<h3 className="title">
			<i className="fas fa-chart-pie fa-md icon"/>
			Budget App
		</h3>
		<ul>
	      <li><Link to="/">Home</Link></li>     
	       <li><Link to="/register">Register</Link></li> 
	        <li><Link to="/login">Login</Link></li>
	    </ul>
	</nav>
)

export default Navbar;
	
