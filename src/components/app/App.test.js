import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Navbar from '../navbar/Navbar'
import BudgetForm from '../budgetForm/BudgetForm'


describe('App component', () => {

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<App />, div);
	  ReactDOM.unmountComponentAtNode(div);
	});


	it ('renders a Navbar component', () => {
		const wrapper = shallow(<App/>)

		expect(wrapper.find(Navbar)).toHaveLength(1)
	})

	it ('renders a BudgetForm component', () => {
		const wrapper = shallow(<App/>)

		expect(wrapper.find(BudgetForm)).toHaveLength(1)
	})


})



