import React, {useState, useContext, useEffect} from 'react'

import BudgetContext from '../../context/budget/budgetContext'

const BudgetForm = (props) => {
	const budgetContext = useContext(BudgetContext)

	const [name,setName]  = useState('')
	
	const {createBudget} = budgetContext

    const onChange = e => {
   	  setName(e.target.value)
   	  console.log(e.target.value)
    }

    const onSubmit = e => {
   		e.preventDefault()
   		createBudget({name})
   	 	setName('')
    }
  

	return (
		<form onSubmit={onSubmit} className="form-inline my-4">
			 <div className="form-row">
    			<div className="col">
					<div className="form-group">
						<input 
						className="form-control"
						type="text" 
						placeholder="name" 
						name="name" 
						value={name} 
						onChange={onChange}/>
					</div>
				</div>
				<div class="col">
					<div><input type="submit" value="Create New" className="btn btn-primary" /></div>
				</div>
			</div>
		</form>
	)
}
export default BudgetForm;