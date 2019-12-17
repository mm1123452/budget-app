const mongoose = require('mongoose')


const BudgetItemSchema = new mongoose.Schema({
  	amount: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const BudgetSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users'
	},
	name:{
		type: String,
		required: true,
	},
	income: [BudgetItemSchema],
	expense: [BudgetItemSchema]
	
	
})

module.exports = mongoose.model('budget', BudgetSchema)