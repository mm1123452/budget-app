import React from 'react'
import {shallow} from 'enzyme'
import Table from './Table'
import TableRow from '../tableRow/TableRow'


describe('table component',() => {
	let wrapper;
	let incomeWrapper;
	let expenseWrapper;
	

	beforeEach(() => {    
	   wrapper = shallow(<Table data={[]}/>)
	  
	   expenseWrapper = shallow(<Table data={[{id:2, descriptiong:'Cable', amount:50},{id:3, descriptiong:'Phone', amount:25}]}/>)
	})

	it('renders a table header section and a table body', () => {
		expect(wrapper.find('.table-header')).toHaveLength(1)
		expect(wrapper.find('.table-body')).toHaveLength(1)
	})

	it('renders a table', () => {
		expect(wrapper.find('.table').type()).toBe('table')
	})

	it('renders a table header with 2 items', () => {
		const head = wrapper.find('thead')
		expect(head.find('th')).toHaveLength(2)
	})

	it('renders a TableRow component for each item in the prop income array', () => {
		const income = [{id:1, description:'Check', amount:5000}]
		incomeWrapper = shallow(<Table data={income}/>)
		const tableRows = incomeWrapper.find(TableRow)
		expect(tableRows).toHaveLength(income.length)
	})

	it('renders a TableRow component for each item in the prop expenses array', () => {
		const expenses = [{id:2, descriptiong:'Cable', amount:50},{id:3, descriptiong:'Phone', amount:25}]
		expenseWrapper = shallow(<Table data={expenses}/>)
		const tableRows = expenseWrapper.find(TableRow)
		expect(tableRows).toHaveLength(expenses.length)
	})

})
