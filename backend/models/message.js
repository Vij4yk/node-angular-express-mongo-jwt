var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/message_app', function(err, db){
	if (!err) {
		console.log("connected to mongodb");
	}
});

var messageModel = new Schema({
	msg: { type: String },
	user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Message', messageModel);