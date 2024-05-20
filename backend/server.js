const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventRoutes');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/events', eventRoutes); // Assuming this handles events, adjust as needed
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); // Removed the extra space

// middleware
app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
