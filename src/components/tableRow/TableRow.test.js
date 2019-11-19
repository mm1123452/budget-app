import React from 'react'
import {shallow} from 'enzyme'
import TableRow from './TableRow'


describe('TableRow component',() => {
	let wrapper;
	let mockProps = {data:{id:1, description:'Check', amount:5000}}

	beforeEach(() => {    
	   wrapper = shallow(<TableRow {...mockProps}/>)
	})

	it('renders a TableRow', () => {
		expect(wrapper.type()).toBe('tr')
	})

	it('renders td elements containing prop data', () => {
		 const descriptionText = wrapper.find('td').at(0).text()
		 const amount = parseInt(wrapper.find('td').at(1).text())
		
		expect(descriptionText).toEqual('Check')
		expect(amount).toEqual(5000)
	})
	

})
