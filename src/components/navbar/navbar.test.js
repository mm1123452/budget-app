import React from 'react'
import Navbar from './Navbar';
import {shallow} from 'enzyme';

describe('Navbar component', () => {
	it('renders a navbar', () => {
		const wrapper = shallow(<Navbar/>)
	
		expect(wrapper.type()).toBe('nav');
	})
})