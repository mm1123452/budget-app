import React, {useContext,useEffect} from 'react'
import BudgetContext from '../../context/budget/budgetContext'
import AuthContext from '../../context/auth/authContext'
import BudgetForm from '../budgetForm/budgetForm'

const Home = () => {
	const budgetContext = useContext(BudgetContext)
	const authContext = useContext(AuthContext)

	const {budget,getAllBudget} = budgetContext;

	const {isAuthenticated, loadUser} = authContext;

	useEffect(() => {
		if (isAuthenticated) {
		    loadUser(localStorage.getItem('token'))
		    getAllBudget()
		}
		
	}, [isAuthenticated])

	const budgetList = budget.length > 0 ? budget.map(budget => (
			<li key={budget._id} className="list-group-item">{budget.name}</li>
		)):null

	return (
		<div className="container">
			<BudgetForm/>
			<h4>Select one:</h4>
			<ul className="list-group mt-4">
				{budgetList}
			</ul>
		</div>
	)
}

export default Home;