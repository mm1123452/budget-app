const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult} = require('express-validator');
const User = require('../models/User')
const Budget = require('../models/Budget')

// @route   GET api/budget
// @desc    Get all user's budget
// @access  Private
router.get('/', auth, async (req,res) => {
	try {
		const budget = await Budget.find({user: req.user.id}).sort({date: -1})
		res.json(budget)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
});

// @route   POST api/budget
// @desc    Add a new budget 
// @access  Private
router.post('/', [auth,
	check('name', 'Name is required')
	.not()
	.isEmpty(),
], async (req,res) => {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {

			return res.status(400).json({ errors: errors.array() });
		}

		const {name} = req.body

		try {
			const newBudget = new Budget({
				name,
				user: req.user.id
			})

			const budget = await newBudget.save()
			res.json(budget)

		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server Error')
		}
	
});


// @route   GET api/budget/:id
// @desc    gets a single budget 
// @access  Private
router.get('/:id', auth, async(req,res) => {

	try {
		const budget = await Budget.findById(req.params.id)
		
		if(!budget) return res.status(404).send({msg:'Not found'})

		if(budget.user.toString() !== req.user.id)  return res.status(401).send({msg:'Not authorized'})


		res.json(budget)
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
});


// @route   POST api/budget/:id
// @desc    adds item to a budget 
// @access  Private
router.post('/:id', [auth,
	[check('amount', 'Amount is required')
	.not()
	.isEmpty(),
	check('amount', 'Amount must be a number')
	.isNumeric(),
	check('description', 'Description is required')
	.trim()
	.not()
	.isEmpty(),
	check('type', 'Type is required')
	.not()
	.isEmpty()]
	],async(req,res) => {

		const errors = validationResult(req)
		if (!errors.isEmpty()) {

			return res.status(400).json({ errors: errors.array() });
		}

	try {
		let budget = await Budget.findById(req.params.id)
		
		if(!budget) return res.status(404).send({msg:'Not found'})

		if(budget.user.toString() !== req.user.id)  return res.status(401).send({msg:'Not authorized'})

	    const {amount, description, type} = req.body

		budget = await Budget.findOneAndUpdate({_id: req.params.id},
			{$push: {[type] : {amount,description,type}}}, {new:true}
		)

		res.json(budget )
	} catch (err) {
		console.error(err.message)
		res.status(500).send('Server Error')
	}
});


// @route   PUT api/budget/:id
// @desc    Update a budget expense or income based on id
// @access  Private
router.put('/:id', [auth,
	[check('amount', 'Amount is required')
	.not()
	.isEmpty(),
	check('amount', 'Amount must be a number')
	.isNumeric(),
	check('description', 'Description is required')
	.trim()
	.not()
	.isEmpty(),
	check('type', 'Type is required')
	.not()
	.isEmpty()]
	], async (req,res) => {

		const errors = validationResult(req)
		if (!errors.isEmpty()) {

			return res.status(400).json({ errors: errors.array() });
		}

		try {
			let budget = await Budget.findById(req.params.id)
			
			if(!budget) return res.status(404).send({msg:'Not found'})

			if(budget.user.toString() !== req.user.id)  return res.status(401).send({msg:'Not authorized'})

		    const {_id,amount, description, type} = req.body

			budget = await Budget.updateOne(
				{_id: req.params.id,[`${type}._id`]: _id},
				{$set: {
					[`${type}.$.description`]:description,
					[`${type}.$.amount`]:amount

				}})

			res.json(budget)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server Error')
		}
});


// @route   Delete api/budget/:id
// @desc    Delete a budget expense or income item by id
// @access  Private
router.delete('/:id',auth, async (req,res) => {
		try {
			let budget = await Budget.findById(req.params.id)
			
			if(!budget) return res.status(404).send({msg:'Not found'})

			if(budget.user.toString() !== req.user.id)  return res.status(401).send({msg:'Not authorized'})

		    const {_id,type} = req.body

			budget = await Budget.updateOne(
				{_id: req.params.id,[`${type}._id`]: _id},
				{$pull: {[type]:{_id}}
			})

			res.json(budget)
		} catch (err) {
			console.error(err.message)
			res.status(500).send('Server Error')
		}

});

module.exports = router;



