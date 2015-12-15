/**
* Unit.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var unit = new mongoose.Schema({
	 	unit_id: Number,//编号
	 	unit_name:String,//单位名称
	 	note:String,//备注
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Unit', unit)
};
