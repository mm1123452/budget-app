import React, {Component,useState, useContext} from 'react'
import uuid from 'uuid/v4'
import BudgetContext from '../../context/budget/budgetContext'
import { useParams} from "react-router-dom";

const BudgetItemsForm = (props) => {
	const [budgetItem, setBudgetItem] = useState({
		description:'',
		amount:0,
		type:''
	})

	const {description,amount,type} = budgetItem
	const {addBudgetItem} = props
	const { id } = useParams();

	const handleChange = (e) => {
		setBudgetItem({...budgetItem, [e.target.name]:e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(budgetItem)

		addBudgetItem({budgetItem, id})

		console.log('form submited')
	}

	return (
		<form onSubmit={handleSubmit} className="form-inline mt-3">
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<input 
					type="text" 
					id="description" 
					name="description"
					className="form-control mx-sm-3"
					onChange={handleChange}
					value={description}/>			
			</div>
			<div className="form-group">
				<label htmlFor="amount">Amount</label>
				<input 
					type="text" 
					id="amount" 
					name="amount"
					className="form-control mx-sm-3"
					onChange={handleChange}
					value={amount} />		
			</div>
			<div className="form-group">
				<div className="form-check">
				  <input className="form-check-input" 
				  	type="radio" 
				  	name="type" 
				  	id="income" 
				  	value="income" 
				  	checked={type === 'income'}
				  	onChange={handleChange}/>
				  <label className="form-check-label" htmlFor="income">
				    Income
				  </label>
				</div>
				<div className="form-check">
				  <input className="form-check-input" 
				  	type="radio" 
				  	name="type" 
				  	id="expense" 
				  	value="expense"
				  	checked={type === 'expense'}
				  	onChange={handleChange}/>
				  <label className="form-check-label" htmlFor="expense">
				    Expense
				  </label>
				</div>
			</div>					 
			 <input className="btn btn-primary ml-2" 
			 type="submit"
			 value="Add"
			 />
		</form>
	)
}

export default BudgetItemsForm;


