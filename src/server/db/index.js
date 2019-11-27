const mongoose = require('mongoose')

mongoose
	.connect('mongodb://localhost:5000/budget', {useNewUrlParser: true, useUnifiedTopology: true})
	.then(() => console.log('Mongodb connected'))
	.catch(e => console.error('Connection error', e))



