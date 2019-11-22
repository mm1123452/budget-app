import React,{Component} from 'react';
import Chart from 'chart.js'

class ChartComponent extends Component {
	constructor(props) {
		super(props)

		this.state = {
		}
	}

	chartRef = React.createRef()

	reduceData() {
		const MAX_EXPENSE_ENTRIES = 4
		const {income,expenses} = this.props
		let largeExpenses;
		let otherExpenses;

		expenses.sort((a,b) => a.amount - b.amount)

		//display only 4 expenses and lump everything else into other
		//also add income as the last item
	    if (expenses.length > MAX_EXPENSE_ENTRIES) {
	    	largeExpenses = expenses.slice(expenses.length - 4)
	    	otherExpenses = expenses.slice(0,expenses.length - 4)

		 	let sum = otherExpenses.reduce((accumulator, currentValue)=> {
		    	  return accumulator + currentValue.amount
		 	 },0)	

		  	let otherEntry = {id: '111',description: 'Other', amount:sum}

		  	largeExpenses.push(otherEntry)

	    } else {
	    	largeExpenses = expenses

	    }
	  	let totalIncome = income.reduce((accumulator, currentValue)=> {
	     	 return accumulator + currentValue.amount
	 	 },0)

		let incomeEntry = {id: '123',description: 'Income', amount:totalIncome, type:'income'}

		largeExpenses.push(incomeEntry)

		  console.log('new', largeExpenses)

		return largeExpenses
	}

	componentDidMount() { 
		const dataset = [], labels=[],colors=[], count=0
		const myChartRef = this.chartRef.current.getContext("2d");

		let budgetData = this.reduceData()
		let incomeTotal = budgetData[budgetData.length - 1].amount
		console.log('income total',incomeTotal)
		budgetData.forEach((item,index) => {
			dataset.push(item.amount/incomeTotal);
			labels.push(item.description)
			colors.push('hsla('+((index+5)*50)+',75%,75%,1)')
		})
		
		console.log(labels)
		console.log(dataset)
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
					text: "Budget",
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
	}

	render() {		
		return (		 	
	     	<div className="container mt-2 mb-2">
	     		<canvas id="myChart mb-2" ref={this.chartRef}/>
	     	</div>
		   
		 );
	}
 
}

export default ChartComponent;