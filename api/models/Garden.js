/**
* Garden.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function(mongoose) {
	 var garden = new mongoose.Schema({
	 	garden_id: Number,//编号
	 	garden_name:String,//绿地名称
	 	description:String,//绿地范围描述
	 	position:Array,//中心点坐标，用于地图显示
	 	polygons:Array,//多边形
	 	type:Number,//绿地类型，对应classes绿地种类表中的编号
	 	area:Number,//绿地面积
	 	plants:String,//植被类型描述
	 	note:String,//备注
	 	unit_id:Number,//责任单位ID
	 	street_id:Number,//所属街道ID
	 	enter_time:Date,//录入时间
	 	isDelete:Boolean//是否删除  true删除  false未删除
	 })

	return mongoose.model('Garden', garden)

	// var node = new Node({name: 'Edward', age: '23'});
	// node.save(function(err){
	//   if(err){
	//     console.log(err);
	//   }else{
	//     console.log('The new node is saved');
	//   }
	// }
}

