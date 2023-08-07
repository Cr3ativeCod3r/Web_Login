require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();

// Database connect
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log('MongoDb OK'))
	.catch((err) => console.log('Error connecting to MongoDB: ', err));


// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(helmet({ crossOriginEmbedderPolicy: false, crossOriginResourcePolicy: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded ({ extended: false }));

app.use(require('./routes/authRoutes'));

app.listen(process.env.PORT, () => console.log('Express OK at:', process.env.PORT));