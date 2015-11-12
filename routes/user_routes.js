var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router() 

//create the index route for all users
userRoutes.route('/')
	.get(usersController.index)

module.exports = userRoutes