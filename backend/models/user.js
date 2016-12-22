var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/message_app', function(err, db){
	if (!err) {
		console.log("connected to mongodb");
	}
});

var userModel = new Schema({
	email: { type: String },
	password: { type: String }
});

module.exports = mongoose.model('User', userModel);