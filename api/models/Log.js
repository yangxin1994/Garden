/**
* Log.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var log = new mongoose.Schema({
	 	log_id: Number,//编号
	 	account_id:Number,//操作账号ID
	 	type:Number,//区分收信人是在哪张用户表中。0表PC端，1微信端
	 	description:String,//操作描述
	 	authority_id:Number,//权限ID
	 	time:Date//时间
	  })

	return mongoose.model('Log', log)
};
