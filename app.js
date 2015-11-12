var express		= require('express'),
	app			= express(),
	logger		= require('morgan'),
	bodyParser	= require('body-parser'),
	mongoose	= require('mongoose')

//establish connection to mongo database
mongoose.connect('mongodb://localhost/users')
