import React, {Component} from 'react'
import uuid from 'uuid/v4'

class BudgetForm extends Component {
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
			//e.preventDefault()
		//console.log(event.target.name)
		this.setState({description: e.target.value})

	}

	handleSubmit(e) {
		e.preventDefault()
		console.log('clicked')
	}

	render() {
		return (
			<form className="form-inline mt-3">
				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input 
						type="text" 
						id="description" 
						name="description"
						className="form-control mx-sm-3"
						onChange={this.handleChange}/>			
				</div>
				<div className="form-group">
					<label htmlFor="amount">Amount</label>
					<input 
						type="text" 
						id="amount" 
						name="amount"
						className="form-control mx-sm-3"
						onChange={this.handleChange} />		
				</div>
				<div className="form-group">
				    <select name="type" className="custom-select" required>
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
export default BudgetForm;