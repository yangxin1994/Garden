/**
 * GardenController
 *
 * @description :: Server-side logic for managing gardens
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/*   
	Examples
	*/	
	  controller_method: function(req, res) {

	  var mymodel = db.Garden({ garden_id:0,garden_name: 'Test' ,description:'描述',position:[0,0],polygons:[0,0],type:-1,area:-1,plants:'',note:'',unit_id:0,street_id:0,enter_time:'2015-03-04',isDelete:0});

	  mymodel.save(function (err, mymodel) {

	    if (err) return console.error(err);

	    console.log('mymodel saved.');
	    res.json(mymodel);

	  });
	}
};

