const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routesUrl = require('./routes/routes');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('databse connected.'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use('/', routesUrl)
app.listen(4000, () => console.log('running successfully'))
