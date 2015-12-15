/**
* Message.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var message = new mongoose.Schema({
	 	message_id: Number,//编号
	 	receive_id:Number,//收信人ID
	 	type:Number,//区分收信人是在哪张用户表中。0表PC端，1微信端
	 	topic:String,//标题
	 	content:String,//内容
	 	receive_time:Date,//j接收时间
	 	state:Number,//状态
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Message', message)
};

