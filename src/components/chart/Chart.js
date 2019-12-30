import React,{useEffect} from 'react';
import Chart from 'chart.js'

const ChartComponent = (props) => {
	let chartRef = React.createRef()
	const reduceData = () => {
		const MAX_EXPENSE_ENTRIES = 4
		const {expenses} = props
		let largeExpenses = [];
		let otherExpenses = [];

		expenses.sort((a,b) => a.amount - b.amount)

		//display only 4 expenses and lump everything else into other
	    if (expenses.length > MAX_EXPENSE_ENTRIES) {
	    	largeExpenses = expenses.slice(expenses.length - MAX_EXPENSE_ENTRIES)
	    	otherExpenses = expenses.slice(0,expenses.length - MAX_EXPENSE_ENTRIES)

		 	let sum = otherExpenses.reduce((accumulator, currentValue)=> {
		    	  return accumulator + currentValue.amount
		 	 },0)	

		  	let otherEntry = {id: '111',description: 'Other', amount:sum}

		  	largeExpenses.push(otherEntry)

	    } else {
	    	largeExpenses = [...expenses]
	    }

		return largeExpenses
	}

	useEffect(() => {
		const {name} = props
		const dataset = [], labels=[],colors=[], count=0
		const myChartRef = chartRef.current.getContext("2d");
		let budgetData = reduceData()


		budgetData.forEach((item,index) => {
			dataset.push(item.amount);
			labels.push(item.description)
			colors.push('hsla('+((index+5)*50)+',75%,75%,1)')
		})

		new Chart(myChartRef, {
			type:'doughnut',
			data: {
				labels:labels,
				datasets:[{
					data: dataset,
					backgroundColor: colors,
					borderWidth:3,
					hoverBackgroundColor:colors
					}
				]
			},
			options: {
				title: {
					text: name,
             		display: true,
             		fontSize: 24
				},
				legend: {
					labels: {
						boxwidth: 20,
					},
					position:'right',
				},
				maintainAspectRatio: false,
			}
		})

	})

	return (		 	
	    <div className="container mt-2 mb-2">
	     	<canvas id="myChart mb-2" ref={chartRef}/>
	    </div>
		   
	); 
}

export default ChartComponent;