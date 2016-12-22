var jwt = require('jwt-simple');
var moment = require('moment');

var User = require('../models/user');

module.exports = {
	register: function(req, res){
		console.log(req.body);

		User.findOne({ email: req.body.email}, function(err, existingUser){
			if(existingUser){
				return res.status(409).send({ message: 'email is already taken'})
			};

			console.log(err);
			
			var user = new User(req.body);

			user.save(function(err, result){
				if (!err) {
					console.log("successfully saved");
					res.status(200).send({ token: createToken(result)})
				}				
			});
		});
	},

	login: function(req, res){
		User.findOne({ email: req.body.email }, function(err, user){
			if(!user){
				return res.status(401).send({ message: 'email/password is invalid'})
			};

			if (req.body.password == user.password) {
				console.log(req.body, user.password);
				res.send({ 
					token: createToken(user) 
				});
			} else {
				return res.status(401).send({ message: 'email/password is invalid'})
			}

		});
	}
}

function createToken(user){
	var payLoad = {
		sub: user._id,
		iat: moment().unix(),
		exp: moment().add(14, 'days').unix()
	};

	return jwt.encode(payLoad, 'secret');
};


