const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();

const fileRoutes = require('./Routes/fileRoute');

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.json()); // For parsing JSON requests
app.use(express.urlencoded({ extended: true })); // For parsing form data

// Routes
app.use('/api/files', fileRoutes);

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});