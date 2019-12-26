import React,{Component} from 'react'

const TableRow = (props) => {
	const {description, amount,_id} = props.data

	const handleEdit =(e) => {console.log('clicked',e.target.id)}
	const handleDelete =(e) => {console.log('clicked',e.target.id)}
	return (
		<tr>
	      	<td >{description}</td>
	     	<td>{amount}</td> 
	     	<td>
	     		<i className="fas fa-pencil-alt px-4" id={_id} onClick={handleEdit}></i>
	     		<i className="fas fa-trash" id={_id} onClick={handleDelete}></i>
	     	</td>
	     		      
	    </tr>
	)
	
}

export default TableRow;