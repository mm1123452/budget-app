import React, {Fragment} from 'react';
import Navbar from '../navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BudgetItems from '../budgetItems/BudgetItems'
import BudgetState from '../../context/budget/budgetState'
import Home from '../home/Home'
import Register  from '../auth/Register'
import Login  from '../auth/Login'

const App = () => {
  return (
  	<BudgetState>
	  	<Router>
		    <Fragment >
		     	<Navbar/>
		  		<div className="container">
		  			<Switch>
		  				<Route exact path='/' component={Home}/>
		  				<Route exact path='/register' component={Register}/>
		  				<Route exact path='/login' component={Login}/>
		  			</Switch>
		  		</div>
		    </Fragment>
	    </Router>
	</BudgetState>
  );
}

export default App;
