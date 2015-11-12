var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose'),
	port 		= process.env.PORT || 3000

//establish connection to mongo database
mongoose.connect('mongodb://localhost/users')

//logs requests made to the app
app.use(logger('dev'))