import React, {useContext,useEffect} from 'react'
import BudgetContext from '../../context/budget/budgetContext'
import AuthContext from '../../context/auth/authContext'

const Home = () => {
	const budgetContext = useContext(BudgetContext)
	const authContext = useContext(AuthContext)

	const {budget} = budgetContext;

	useEffect(() => {
		authContext.loadUser(localStorage.getItem('token'))
	}, [])

	const budgetList = budget.length > 0 ? budget.map(budget => (
			<li key={budget.id} className="list-group-item">{budget.name}</li>
		)):null

	return (
		<div className="container">
			<button type="button" className="btn btn-primary mt-4 mb-3">Create New</button>
			<h4>Select one:</h4>
			<ul className="list-group mt-4">
				{budgetList}
			</ul>
		</div>
	)
}

export default Home;