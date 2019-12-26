import React, {Component,useState, useContext} from 'react'
import uuid from 'uuid/v4'
import BudgetContext from '../../context/budget/budgetContext'
import { useParams} from "react-router-dom";

// USING HOOKS
const BudgetItemsForm = () => {
	const budgetContext = useContext(BudgetContext)
	const [budgetItem, setBudgetItem] = useState({
		description:'',
		amount:0,
		type:''
	})

	const {description,amount,type} = budgetItem
	const {addBudgetItem} = budgetContext
	const { id } = useParams();


	const handleChange = (e) => {
		console.log('form changed')

		setBudgetItem({...budgetItem, [e.target.name]:e.target.value})
		console.log(budgetItem)
		//console.log('param', id)
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
















/*class BudgetItemsForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			description:'',
			amount:0,
			type:''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		e.preventDefault()
		this.setState({[e.target.name]:e.target.value})

	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('clicked', this.state)
		const amount = parseInt(this.state.amount)
		this.props.add({...this.state, amount,id: uuid()})
	}

	render() {
		const {description, amount, type} = this.state
		return (
			<form className="form-inline mt-3">
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input 
						type="text" 
						id="description" 
						name="description"
						className="form-control mx-sm-3"
						onChange={this.handleChange}
						value={description}/>			
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input 
						type="text" 
						id="amount" 
						name="amount"
						className="form-control mx-sm-3"
						onChange={this.handleChange}
						value={amount} />		
				</div>
				<div className="form-group">
				    <select name="type" className="custom-select" 
				    value={type} onChange={this.handleChange} required>
				      <option value="">Select One</option>
				      <option value="expense">Expense</option>
				      <option value="income">Income</option>		   
				    </select>		    
				 </div>
				 <button onClick = {this.handleSubmit} className="btn btn-primary ml-2" type="submit">Add</button>
			</form>
		)
	}
}
export default BudgetItemsForm;*/