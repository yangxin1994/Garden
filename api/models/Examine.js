/**
* Examine.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var examine = new mongoose.Schema({
	 	examine_id: Number,//编号
	 	type:String,//管理类别
	 	description:String,//细则
	 	isDelete:Boolean//是否删除  true删除  false未删除
	  })

	return mongoose.model('Examine', examine)
};

