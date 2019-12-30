import React,{useContext,useEffect,Fragment} from 'react';
import BudgetItemsForm from '../budgetItemsForm/BudgetItemsForm'
import Table from '../table/Table'
import Chart from '../chart/Chart'
import BudgetContext from '../../context/budget/budgetContext'
import { useParams} from "react-router-dom";

const BudgetItems = (props) => { 
	const TABLE_TITLE_1 = 'Expenses'
	const TABLE_TITLE_2 = 'Income'
	
	const budgetContext = useContext(BudgetContext)

	const {getOneBudget,budget,addBudgetItem} = budgetContext
	const {income, expense,name} = budget
	const { id } = useParams();


	useEffect(() => {
		//loadUser(localStorage.getItem('token'))
		//if (isAuthenticated) {
		    //loadUser(localStorage.getItem('token'))
		    getOneBudget(id)
		//}
		
	}, [])

	return (		
	 	<Fragment>   
	 		<div className="container">
	     		<BudgetItemsForm addBudgetItem={addBudgetItem}/>
	     	</div>
	     	{expense && expense.length > 0 ? 
	     		<Chart name={name} expenses={expense} /> :
	     		null
	     	}
	     	<div className="container">
	     		<div className="mt-3 d-flex justify-content-start">	     		
	     			{expense && expense.length > 0 ?
	     				<Table title={TABLE_TITLE_1} data={expense}/> : null}
	     			{income && income.length > 0 ? 
	     				<Table title={TABLE_TITLE_2} data={income}/> : null}
	     		</div>
	     	</div>
	    </Fragment>	   
	 );
}
 
export default BudgetItems;

