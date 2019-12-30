import React, {useContext,useEffect} from 'react'
import { Link } from 'react-router-dom';
import BudgetContext from '../../context/budget/budgetContext'
import AuthContext from '../../context/auth/authContext'
import BudgetForm from '../budgetForm/budgetForm'

const Home = () => {
	const budgetContext = useContext(BudgetContext)
	const authContext = useContext(AuthContext)

	const {budget,getAllBudget} = budgetContext;

	const {isAuthenticated, loadUser, loading} = authContext;

	useEffect(() => {
		 loadUser(localStorage.getItem('token'))
		if (isAuthenticated) {
		    getAllBudget()
		}
		
	}, [])

	const message = (budget !== null && budget.length === 0 && !loading) ?
		'Enter budget name to get started' :
		'Select one:'

	const budgetList = budget.length > 0 ? budget.map(budget => (
			<li key={budget._id} className="list-group-item">
				<Link to={`/budget/${budget._id}`}>{budget.name}</Link>
			</li>
		)):null

	return (
		<div className="container">
			<BudgetForm/>
			<h5>{message}</h5>
			<ul className="list-group mt-4">
				{budgetList}
			</ul>
		</div>
	)
}

export default Home;