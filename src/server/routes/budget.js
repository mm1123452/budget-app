const express = require('express');
const router = express.Router();

// @route   GET api/budget
// @desc    Get all user's budget
// @access  Private
router.get('/', (req,res) => {
	res.send('Get every budget')
});

// @route   POST api/budget
// @desc    Add a new budget 
// @access  Private
router.post('/', (req,res) => {
	res.send('Add budget')
});


// @route   PUT api/budget/:id
// @desc    Update a budget
// @access  Private
router.put('/:id', (req,res) => {
	res.send('Update budget')
});


// @route   Delete api/budget/:id
// @desc    Delete a budget
// @access  Private
router.delete('/:id', (req,res) => {
	res.send('Delete budget')
});

module.exports = router;



