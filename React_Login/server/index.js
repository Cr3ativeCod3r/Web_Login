const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const { mongoose } = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser')

// database connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDb OK"))
  .catch((err) => console.log('Error connecting to MongoDB: ', err));


  
// middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded ({ extended: false }))

app.use('/', require('./routes/authRoutes'));

const port = 8000;
app.listen(port, () => console.log('Express OK at:', port));

