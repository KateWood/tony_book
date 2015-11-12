var usersController = require('../controllers/users_controller.js'),
	express			= require('express'),
	userRoutes		= express.Router() 

//create the index route for all users
userRoutes.get('/', function(req, res) {
	//user the controller to retrieve all the users
	res.json(usersController.index())
})