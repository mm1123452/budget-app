import React,{useContext} from 'react'
import BudgetContext from '../../context/budget/budgetContext'
import { useParams} from "react-router-dom";

const TableRow = (props) => {
	const budgetContext = useContext(BudgetContext)
	const {deleteBudgetItem } = budgetContext
	const {description, amount,_id, type} = props.data

	const {id} = useParams()

	const handleClick = (e) => {
		e.preventDefault()
		if (e.target.getAttribute('name') === 'edit') {
			console.log('editing')
		} else if (e.target.getAttribute('name') === 'delete'){
			console.log('deleting')
			deleteBudgetItem({budgetId:id, _id:e.target.id, type:e.target.getAttribute('type')})
		} else {
			console.log('something else')
		}
	}
	return (
		<tr>
	      	<td >{description}</td>
	     	<td>{amount}</td> 
	     	<td>
	     		<i className="fas fa-pencil-alt px-4" name="edit" id={_id} type={type} onClick={handleClick}></i>
	     		<i className="fas fa-trash" id={_id} name="delete" type={type} onClick={handleClick}></i>
	     	</td>
	     		      
	    </tr>
	)
	
}

export default TableRow;