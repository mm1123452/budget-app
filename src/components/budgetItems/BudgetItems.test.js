import React from 'react';
import {shallow,mount} from 'enzyme';
import BudgetForm from '../budgetForm/BudgetForm'
import BudgetItems from '../budgetItems/BudgetItems'
import Table from '../table/Table'
import Chart from '../chart/Chart'
import uuid from 'uuid/v4'

jest.mock('uuid/v4')

describe('budgetItems component', () => {
	let wrapper;
	beforeEach(() => {    
	   wrapper = shallow(<BudgetItems/>)
	})

	it ('renders a BudgetForm component', () => {
		expect(wrapper.find(BudgetForm)).toHaveLength(1)
	})

	it ('does not render Table components if state array is empty', () => {
		let expensesLength = wrapper.state('expenses').length
		expect(wrapper.find(Table)).toHaveLength(expensesLength)
	})

	it ('render Table components if state array is not empty', () => {
		wrapper.setState({expenses:[{}, {}]})
		expect(wrapper.find(Table)).toHaveLength(1)
	})

	it ('renders 2 Table components if state array is not empty', () => {
		wrapper.setState({expenses:[{}, {}]})
		wrapper.setState({income:[ {}]})
		expect(wrapper.find(Table)).toHaveLength(2)
	})

	it('has an initial state', () => {
		const expectedState = {id:1,name:'November',expenses:[],income:[]}
		expect(wrapper.state()).toEqual(expectedState)
	})

	it('passes addItem function as props and calls it when new item is added', () => {	
		wrapper.find(BudgetForm).prop('add')({description:'Cable',amount:40,type:'expense', id:1});
		expect(wrapper.state('expenses')).toEqual([{description:'Cable',amount:40,type:'expense', id:1}]);

		wrapper.find(BudgetForm).prop('add')({description:'Paycheck',amount:5000,type:'income',id:1});
		expect(wrapper.state('income')).toEqual([{description:'Paycheck',amount:5000,type:'income',id:1}]);
	})

	it('passes expense and income arrays as props to Table component', () => {	
		wrapper.setState({expenses:[{}, {}]})
		wrapper.setState({income:[ {}]})
		const expenses = wrapper.find(Table).at(0).prop('data')
		const income = wrapper.find(Table).at(1).prop('data')
		expect(wrapper.state('expenses')).toEqual(expenses)
		expect(wrapper.state('income')).toEqual(income)
	})

	it('renders a Chart component if expenses & income exist', () => {
		wrapper.setState({expenses:[{}, {}],income:[{}]})
		expect(wrapper.find(Chart)).toHaveLength(1)
	})

	it('does not render a Chart component if only income or only expenses exist', () => {
		wrapper.setState({income:[{}]})
		expect(wrapper.find(Chart)).toHaveLength(0)
	})

})
