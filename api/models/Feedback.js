/**
* Feedback.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var feedback = new mongoose.Schema({
	 	feedback_id: Number,//编号
	 	wechat_id:Number,//反馈人ID
	 	garden_id:Number,//绿地ID
	 	examine_id:Number,//检查内容
	 	description:String,//细则
	 	picture_url:String,//图片URL
	 	create_time:Date,//创建时间
	 	state:Number,//状态
	 	modify_time:Date,//最后一次修改时间
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Feedback',feedback)
};

