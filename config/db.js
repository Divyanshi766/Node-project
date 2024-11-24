const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  // replace with your MySQL username
    password: 'root',  // replace with your MySQL password
    database: 'temp_db'  // replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('error connecting to database:', err);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = db;
