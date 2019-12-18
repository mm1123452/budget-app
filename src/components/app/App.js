import React, {Fragment} from 'react';
import Navbar from '../navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import BudgetItems from '../budgetItems/BudgetItems'
import Home from '../home/Home'

const App = () => {
  return (
  	<Router>
	    <Fragment >
	     	<Navbar/>
	  		<div className="container">
	  			<Switch>
	  				<Route exact path='/' component={Home}/>
	  			</Switch>
	  		</div>
	    </Fragment>
    </Router>
  );
}

export default App;
