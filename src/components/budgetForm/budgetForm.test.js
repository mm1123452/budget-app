import React from 'react'
import {shallow} from 'enzyme'
import BudgetForm from './BudgetForm'
import uuid from 'uuid/v4'

jest.mock('uuid/v4')
//budget: [{id:123,name:'November',Expenses:[],Income:[]}]
/*
[{
	id:123,
	name:'May'
	expenses:[
	{ id: 1,
	  description:Cable,
	  amount:$50.00
	},
	{ id: 2,
	  description:Insurance,
	  amount:$150.00
	}

	],
	income:[
	{ id: 2,
	  description:Paycheck,
	  amount:$1500.00
	}
	]
	
}, {
	id:1234,
	name:'June'
	expenses:[],
	income:[]
	
}]
budget: [{
				id: 1,
				name:'November',
				expenses: [],
				income:[]
			}]

*/

describe('BudgetForm Component', () => {
	beforeEach(() => {    
	  //jest.resetAllMocks()
	});

	it('renders a form', () => {
		const wrapper = shallow(<BudgetForm/>)

		expect(wrapper.type()).toBe('form')
	})

	it('renders 2 input fields', () => {
		const wrapper = shallow(<BudgetForm/>)

		expect(wrapper.find('input[name="description"]')).toHaveLength(1)
		expect(wrapper.find('input[name="amount"]')).toHaveLength(1)
	})

	it('renders 1 select field', () => {
		const wrapper = shallow(<BudgetForm/>)

		expect(wrapper.find('select[name="type"]')).toHaveLength(1)
	})

	it('renders a submit button', () => {
		const wrapper = shallow(<BudgetForm/>)

		expect(wrapper.find('button')).toHaveLength(1)
	})

	it('has an initial state', () => {
		const wrapper = shallow(<BudgetForm/>)
		//const expectedState = {description:'', amount:0, type:''}

		expect(wrapper.state('description')).toEqual('')
		expect(wrapper.state('amount')).toEqual(0)
		expect(wrapper.state('type')).toEqual('')
	})

	xit('typing in the input calls handleChange method', () => {
		const handleChange = jest.spyOn(BudgetForm.prototype,'handleChange');
		const wrapper = shallow(<BudgetForm/>)
		wrapper.find('input[name="description"]').simulate('change')
		wrapper.find('input[name="amount"]').simulate('change')
		expect(handleChange).toHaveBeenCalledTimes(2)
		handleChange.mockReset()
		handleChange.mockRestore();
	})

	it('calls handleChange method and updates the state', () => {
		const handleChange = jest.spyOn(BudgetForm.prototype,'handleChange');
		const wrapper = shallow(<BudgetForm/>);
		const event = {
		    preventDefault() {},
		    target: { value: 'Cable' }
		  };
		const expected = {description: 'Cable', amount:0, type:''};

		wrapper.find('input[name="description"]').simulate('change',event);

		//wrapper.find('input[name="amount"]').simulate('change')
		expect(wrapper.state()).toEqual(expected)
		handleChange.mockReset()
		handleChange.mockRestore();
	})

	it('clicking the submit button calls HandleSubmit method', () => {
		const handleSubmit = jest.spyOn(BudgetForm.prototype,'handleSubmit');
		const wrapper = shallow(<BudgetForm/>)
		wrapper.find('button').simulate('click', { preventDefault() {} })

		expect(handleSubmit).toHaveBeenCalled()
		handleSubmit.mockClear();
	})


	

})
