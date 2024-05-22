const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 8060

const cors = require('cors')
app.use(cors())

const Routes = require('./Routes/Routes')
app.use(bodyParser.json())
app.use('/', Routes)

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`MongoDB Database is live...!`))

app.listen(PORT, () => console.log(`Server is running on ${PORT}`))