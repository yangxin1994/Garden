/**
* Autority.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var authority = new mongoose.Schema({
	 	authority_id: Number,//编号
	 	description:String//权限描述
	 })

	return mongoose.model('Authority', authority)
};

