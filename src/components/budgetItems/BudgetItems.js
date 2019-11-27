import React,{Component, Fragment} from 'react';
import BudgetForm from '../budgetForm/BudgetForm'
import Table from '../table/Table'
import Chart from '../chart/Chart'

class BudgetItems extends Component {
	constructor(props) {
		super(props)

		this.state = {
			id:1,
			name:'November',
			expenses:[],
			income:[]
		}
		this.addItem = this.addItem.bind(this)
	}

	addItem(item) {
		 (item.type === 'expense') ? 
		 	this.setState({expenses: [...this.state.expenses, item]}):
		 	this.setState({income: [...this.state.income, item]})
	}

	render() {
		const {income, expenses} = this.state
		const TABLE_TITLE_1 = 'Expenses'
		const TABLE_TITLE_2 = 'Income'

		 return (		
		 	<Fragment>   
		 		<div className="container">
		     		<BudgetForm add={this.addItem}/>	
		     	</div>
		     	{income.length > 0 && expenses.length > 0 ? 
		     		<Chart expenses={expenses} income={income}/> :
		     		null
		     	}
		     	<div className="container">
		     		<div className="mt-3 d-flex justify-content-start">
		     			{expenses.length > 0 ?
		     				<Table title={TABLE_TITLE_1} data={expenses}/> : null}
		     			{income.length > 0 ? 
		     				<Table title={TABLE_TITLE_2} data={income}/> : null}
		     		</div>
		     	</div>
		    </Fragment>	   
		  );
	}
 
}

export default BudgetItems;
