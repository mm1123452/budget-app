const express = require('express')

const app = express();

const db = require('./db')

const PORT = process.env.PORT || 5000;

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req,res) => {
	res.send('MAIN')
})

app.listen(PORT, () => console.log(`app started on port ${PORT}`))