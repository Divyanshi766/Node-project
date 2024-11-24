const User = require('../models/usersModel.js');


const userController = {
    showUsers: (req, res) => {
        User.getAllUsers((err, users) => {
            if (err) {
                res.status(500).send('Error retrieving users');
                return;
            }
            res.render('index', { users }); // Render view with user data
        });
    }
};

module.exports = userController;
