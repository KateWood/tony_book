var User = require('../models/user.js')

//create index action to display all users
function index(req, res) {
	User.find({}, function(err, users) {
		if (err) console.log(err)
		res.json(users)
	})
}

//create action to add a new user
function create(req,res){
  // make a single user -- create
	console.log("Creating a user")
	var user = new User()
​
	user.name = req.body.name
	user.username = req.body.username
	user.password = req.body.password
​
	user.save(function(err){
		if(err){
			if(err.code == 11000){
				return res.json({success: false, message: "username already exists" })
			} else {
				res.send(err)
			}
		}
		res.json({success: true, message: "User created, Wahey!"})
	})
}

module.exports = {
	index: index,
	create: create
}