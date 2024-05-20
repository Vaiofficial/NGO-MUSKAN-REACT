const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventRoutes');
const userRouter  = require('./routes/user.route')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use('/api/user', eventRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use('/api/user', userRouter);