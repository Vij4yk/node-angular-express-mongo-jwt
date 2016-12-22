var Message = require('../models/message');


module.exports = {

	getMessage: function(req, res, next){
		Message.find({}).populate('user', '-password').exec(function(err, result){
			// console.log(msgs);
			res.json(result);
		});
	},

	postMessage: function (req, res, next) {
		console.log(req.body, req.user)
		req.body.user = req.user;
		var message = new Message(req.body);
		message.save();
		res.status(200);
	}
}
