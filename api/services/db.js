/**
 * We load mongoose
 */
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Garden');

/**
 * We check if the connection is ok
 * If so we will continue to load everything ...
 */
var db = mongoose.connection;

console.log('Try to connect to MongoDB via Mongoose ...');

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function callback() {

	console.log('Connected to MongoDB !');

});

/**
 * Let's make our Mongodb Schemas/Models
 */
 module.exports = {

 	Authority: require('../models/Authority.js')(mongoose);
 	Classes: require('../models/Classes.js')(mongoose);
 	Examine: require('../models/Examine.js')(mongoose);
 	Feedback: require('../models/Feedback.js')(mongoose);
 	Garden: require('../models/Garden.js')(mongoose);
 	Log: require('../models/Log.js')(mongoose);
 	Message: require('../models/Message.js')(mongoose);
 	Staff: require('../models/Staff.js')(mongoose);
 	Street: require('../models/Street.js')(mongoose);
 	Task: require('../models/Task.js')(mongoose);
 	Unit: require('../models/Unit.js')(mongoose);
 	Wechat: require('../models/Wechat.js')(mongoose);
  }