import React,{Component, Fragment} from 'react'
import TableRow from '../tableRow/TableRow'

class Table extends Component {

	render() {
		const {data,title} = this.props
		console.log(data)
		
		const rows = data.map(row => {
			return <TableRow key={row.id} data={row}/>
		})

		const sum = data.reduce((accumulator, currentValue) => {
			return accumulator + currentValue.amount
		},0)

		return (
			<div className="d-flex flex-column flex-fill mr-5">
				<div className="table-header">
					<h5>
						{title}
						<small>total: ${sum}</small>
					</h5>
				</div>
				<div className="table-body">
					<table className="table flex-fill ml-1 mr-4">
					  <thead>
					    <tr>
					      <th scope="col">Description</th>
					      <th scope="col">Amount</th>
					    </tr>
					  </thead>
					  <tbody>
					  	{rows}					    
					  </tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Table;