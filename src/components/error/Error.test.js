import React from 'react'
import {shallow} from 'enzyme'
import ErrorComponent from './Error'

xdescribe('Error Component', () => {
	let wrapper;

	beforeEach(() => {    	
	   wrapper = shallow(<ErrorComponent message='Error'/>)	  
	})

	it ('renders a form', () => {
		expect(wrapper.prop('message')).toEqual('Error')
	})
	
})