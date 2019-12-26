import React, {Fragment} from 'react';
import Navbar from '../navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from '../routing/privateRoute'
import BudgetItems from '../budgetItems/BudgetItems'
import BudgetState from '../../context/budget/budgetState'
import AuthState from '../../context/auth/authState'
import Home from '../home/Home'
import Register  from '../auth/Register'
import Login  from '../auth/Login'

const App = () => {
  return (
  	<AuthState>
	  	<BudgetState>
		  	<Router>
			    <Fragment >
			     	<Navbar/>
			  		<div className="container">
			  			<Switch>
			  				<PrivateRoute exact path='/' component={Home}/>
			  				<Route exact path='/register' component={Register}/>
			  				<Route exact path='/login' component={Login}/>
			  				<PrivateRoute exact path='/budget/:id' component={ BudgetItems}/>
			  			</Switch>
			  		</div>
			    </Fragment>
		    </Router>
		</BudgetState>		
	</AuthState>
  );
}

export default App;
