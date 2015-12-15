/**
* Wechat.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var wechat = new mongoose.Schema({
	 	id:Number,//编号
	 	wechat_id: Number,//微信用户唯一ID
	 	name:String,//监理员姓名
	 	phone:String,//联系方式
	 	note:String,//备注
	 	notice_time:Date,//关注时间
	 	isNotice:Boolean,//是否关注
	 	msg_id:Number,//最后一条消息ID
	 	role:Number,//角色 4—监理员，5—普通用户
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Wechat', wechat)
};

