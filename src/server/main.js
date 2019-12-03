const express = require('express')

const app = express();

const db = require('./db')

const PORT = process.env.PORT || 5000;

//db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/budget', require('./routes/budget'))

app.get('/', (req,res) => {
	res.json({msg:'Hello World'})
})

app.listen(PORT, () => console.log(`app started on port ${PORT}`))