import React from 'react'
import {shallow} from 'enzyme'
import BudgetForm from './BudgetForm'
import uuid from 'uuid/v4'

jest.mock('uuid/v4')
describe('BudgetForm Component', () => {
	let wrapper;
	let handleChange;
	let wrapperWithProps;
	let baseProps = {
		add: jest.fn()
	}
	let mockFn = jest.fn()

	beforeEach(() => {    
	   handleChange = jest.spyOn(BudgetForm.prototype,'handleChange')
	   wrapper = shallow(<BudgetForm add={mockFn}/>)
	   //wrapperWithProps = shallow(<BudgetForm add={() => {}}/>)
	})

	afterEach(() => {    
	  	handleChange.mockReset()
		handleChange.mockRestore();
	});

	it('renders a form', () => {
		expect(wrapper.type()).toBe('form')
	})

	it('renders 2 input fields', () => {
		expect(wrapper.find('input[name="description"]')).toHaveLength(1)
		expect(wrapper.find('input[name="amount"]')).toHaveLength(1)
	})

	it('renders 1 select field', () => {
		expect(wrapper.find('select[name="type"]')).toHaveLength(1)
	})

	it('renders a submit button', () => {
		expect(wrapper.find('button')).toHaveLength(1)
	})

	it('has an initial state', () => {
		expect(wrapper.state('description')).toEqual('')
		expect(wrapper.state('amount')).toEqual(0)
		expect(wrapper.state('type')).toEqual('')
	})


	it('calls handleChange method when user types in the input fields', () => {
		const event = {
		    preventDefault() {},
		    target: { value: '' }
		  };
		wrapper.find('input[name="description"]').simulate('change',  event)
		wrapper.find('input[name="amount"]').simulate('change', event)
		expect(handleChange).toHaveBeenCalledTimes(2)
	})

	it('calls handleChange method and updates the state description field', () => {
		const event = {
		    preventDefault() {},
		    target: {name:'description', value: 'Cable' }
		  };
		const expected = {description: 'Cable', amount:0, type:''};

		wrapper.find('input[name="description"]').simulate('change',event);

		expect(wrapper.state()).toEqual(expected)
	})

	it('calls handleChange method and updates the state amount field', () => {
		const event = {
		    preventDefault() {},
		    target: {name:'amount', value: 50 }
		  };
		const expected = {description: '', amount:50, type:''};

		wrapper.find('input[name="amount"]').simulate('change',event);
		expect(wrapper.state()).toEqual(expected)
	})

	it('calls handleChange method and updates the state type field', () => {
		const event = {
		    preventDefault() {},
		    target: {name:'type', value: 'expense' }
		  };
		const expected = {description: '', amount:0, type:'expense'};
	
		wrapper.find('select').simulate('change',event)
		expect(wrapper.state()).toEqual(expected)
	})

	it('calls HandleSubmit method when the submit button is clicked', () => {
		const handleSubmit = jest.spyOn(BudgetForm.prototype,'handleSubmit');
		const wrapper = shallow(<BudgetForm add={jest.fn()} />)
		wrapper.find('button').simulate('click', { preventDefault() {} })

		expect(handleSubmit).toHaveBeenCalled()
		handleSubmit.mockClear();
		handleSubmit.mockRestore();
	})	

	xit('calls addItem() prop when the submit button is clicked', () => {
		const handleSubmit = jest.spyOn(BudgetForm.prototype,'handleSubmit');
		const wrapper = shallow(<BudgetForm add={jest.fn()}/>)
		wrapper.find('button').simulate('click', { preventDefault() {} })

		expect(wrapper.props().add()).toHaveBeenCalled()
		handleSubmit.mockClear();

		handleSubmit.mockRestore();
	})	
})
