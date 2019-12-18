import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import App from './App';
import Navbar from '../navbar/Navbar'
import BudgetItems from '../budgetItems/BudgetItems'


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




})



