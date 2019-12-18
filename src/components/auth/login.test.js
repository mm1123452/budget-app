import React from 'react'
import {shallow, mount} from 'enzyme'
import Login from './Login'

describe('Login Component', () => {
	let wrapper;

	beforeEach(() => {    	
	   wrapper = shallow(<Login />)	  
	})

	it ('renders a form', () => {
		expect(wrapper.find('form')).toHaveLength(1)
	})

	it('renders 2 input fields', () => {
		expect(wrapper.find('input[name="email"]')).toHaveLength(1)
		expect(wrapper.find('input[name="password"]')).toHaveLength(1)
	})

})