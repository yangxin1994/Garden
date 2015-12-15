/**
* Street.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var street = new mongoose.Schema({
	 	street_id: Number,//编号
	 	street_name:String,//街道名称
	  })

	return mongoose.model('Street', street)
};

