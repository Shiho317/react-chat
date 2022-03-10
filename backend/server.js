const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require('./routes/routes');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log('databse connected.'))

app.use(express.json())
app.use(cors())
app.use('/', routesUrl)
app.listen(4000, () => console.log('running successfully'))