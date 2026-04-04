const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const recordRoutes = require('./routes/record.routes');
const userRoutes = require('./routes/user.routes');
const summaryRoutes = require('./routes/summary.routes');



dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
    res.end('API is running...');
});
app.use('/api/users', userRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/summary', summaryRoutes);

module.exports = app;