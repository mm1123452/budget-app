import React from 'react'

const Home = () => {
	return (
		<div className="container">
			<h1>Home</h1>
			<button type="button" className="btn btn-primary mt-2 mb-3">Create New</button>
			<h4>Select one:</h4>
			<ul className="list-group mt-4">
			  <li className="list-group-item">November</li>
			  <li className="list-group-item">December</li>
			</ul>
		</div>
	)
}

export default Home;