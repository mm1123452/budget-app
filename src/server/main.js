const express = require('express')

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
	res.send('MAIN')
})

app.listen(PORT, () => console.log(`app started on port ${PORT}`))