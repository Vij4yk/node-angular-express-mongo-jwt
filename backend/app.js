var express = require('express');
var bodyParser = require('body-parser');

var checkauthenticated = require('./services/checkauthenticated');
var cors = require('./services/cors');
var message = require('./routes/message');
var users = require('./routes/users');


var app = express();

app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/messages', message.getMessage);
app.post('/api/messages', checkauthenticated, message.postMessage);
app.post('/auth/register', users.register);
app.post('/auth/login', users.login)

app.listen(9000, function () {
	console.log("App is listening port 9000");
})
