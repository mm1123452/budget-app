import React, {useContext} from 'react'
import BudgetContext from '../../context/budget/budgetContext'

const Home = () => {
	const budgetContext = useContext(BudgetContext)

	const {budget} = budgetContext;

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