var mongoose = require('mongoose')

//create user schema
var userSchema = new mongoose.Schema({
	user_name: String,
	email: {type: String, required: true, unique: true},
	friends: [],
	age: Number
})