const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventRoutes');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
require('dotenv').config();
const cookieParser =  require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Your frontend URL
  credentials: true, // This allows cookies to be sent
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/events', eventRoutes);  
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


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
