var User = require('../models/user.js')

//create index action to display all users
module.exports.index = function() {
	User.find({}, function(err, users) {
		if (err) console.log(err)
		return users
	})
}