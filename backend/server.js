const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const eventRoutes = require('./routes/eventRoutes');
const userRouter = require('./routes/user.route');
const authRouter = require('./routes/auth.route');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT || 5000;

// Define allowed origins
const allowedOrigins = [
  'http://localhost:3000', // Local development
  'https://ngomuskan.netlify.app/', // Deployed frontend
];

// Middleware for CORS
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // This allows cookies to be sent
}));

// Other middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
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
