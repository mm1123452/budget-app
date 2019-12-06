const express = require('express')
const app = express();
const connectDB = require('./db')
const PORT = process.env.PORT || 5000;

connectDB()

app.use(express.json({extended: false}))

app.get('/', (req,res) => {
	res.json({msg:'Hello World'})
})

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/budget', require('./routes/budget'))

app.listen(PORT, () => console.log(`app started on port ${PORT}`))