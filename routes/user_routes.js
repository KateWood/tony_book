var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router() 

//create routes for /users
userRoutes.route('/')
	.get(usersController.index)
	.post(usersController.create)

module.exports = userRoutes