/**
* Classes.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var classes = new mongoose.Schema({
	 	classes_id: Number,//编号
	 	type1:String,//大类
	 	type2:String//小类
	  })

	return mongoose.model('Classes',classes)
};

