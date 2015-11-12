var User = require('../models/user.js')

//create index action to display all users
function index(req, res) {
	User.find({}, function(err, users) {
		if (err) console.log(err)
		res.json(users)
	})
}

module.exports = {
	index: index
}