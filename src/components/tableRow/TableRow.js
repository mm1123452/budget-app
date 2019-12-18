import React,{Component} from 'react'

class TableRow extends Component {

	render() {
		const {description, amount} = this.props.data
		return (
			<tr>
		      	<td >{description}</td>
		     	<td>{amount}</td> 		      
		    </tr>
		)
	}
}

export default TableRow;