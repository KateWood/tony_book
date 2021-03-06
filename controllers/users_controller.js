var User = require('../models/user.js')

//create index action to display all users
function index(req, res) {
	User.find({}, function(err, users) {
		if (err) console.log(err)
		res.json(users)
	})
}

//create action to add a new user
function create(req, res) {
	// make a single user -- create
	console.log('Creating a user')
	var user = new User()

	user.user_name = req.body.user_name
	user.email = req.body.email

	user.save(function(err){
		if(err){
			if(err.code == 11000){
				return res.json({success: false, message: 'username already exists' })
			} else {
				res.send(err)
			}
		} else {
			res.json({success: true, message: 'User created, Wahey!'})
		}
	})
}

//create action to show a single user
function show(req, res) {
	User.find({email: req.params.email}, function(err, user) {
		if (err) console.log(err)
		res.json(user)
	})
}

module.exports = {
	index: index,
	create: create,
	show: show
}