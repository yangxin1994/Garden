/**
* Staff.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var staff = new mongoose.Schema({
	 	staff_id: Number,//编号
	 	staff_name:String,//姓名
	 	unit:Number,//所属负责单位的名称
	 	account:String,//账号
	 	password:String,//密码
	 	role:Number,//角色，0-—管理员，1—监理公司，2—绿地负责人
	 	note:String,//备注
	 	create_time:Date,//创建时间
	 	message_id:Number,//最后一条消息ID
	 	modify_time:Date,//最后一次修改时间
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Staff', staff)
};

