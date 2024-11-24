const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const userRoutes = require('./routes/userRoutes');

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/', userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});