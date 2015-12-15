/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var task = new mongoose.Schema({
	 	task_id: Number,//编号
	 	from_id:Number,//监理公司账号ID
	 	to_id:Number,//监理人员ID
	 	garden_id:Number,//绿地ID
	 	frequent:Number,//检查频率（多少天一次）
	 	content:Array,//建立内容（检查内容ID组成的数组）
	 	note:String,//备注说明
	 	create_time:Date,//创建时间
	 	start_time:Date,//起始时间
	 	end_time:Date,//终止时间
	 	modify_time:Date,//最后一次修改时间
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Task', task)
};

