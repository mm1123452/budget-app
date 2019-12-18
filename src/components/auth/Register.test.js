import React from 'react'
import {shallow} from 'enzyme'
import Register from './Register'

describe('Register Component', () => {
	let wrapper;

	beforeEach(() => {    	
	   wrapper = shallow(<Register />)	  
	})

	it ('renders a form', () => {
		expect(wrapper.find('form')).toHaveLength(1)
	})

	it('renders 4 input fields', () => {
		expect(wrapper.find('input[name="name"]')).toHaveLength(1)
		expect(wrapper.find('input[name="email"]')).toHaveLength(1)
		expect(wrapper.find('input[name="password"]')).toHaveLength(1)
		expect(wrapper.find('input[name="password2"]')).toHaveLength(1)		
	})
})