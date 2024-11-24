const db = require('../config/db');

const User = {
    getAllUsers: (callback) => {
        db.query('SELECT * FROM users', (err, results) => {
            if (err) {
                console.error('Error fetching users:', err);
                return callback(err, null);
            }
            callback(null, results); // Pass results to callback
        });
    }
};

module.exports = User;
