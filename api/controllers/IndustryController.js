/**
 * IndustryController
 *
 * @description :: Server-side logic for managing industries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	list:function(req,res){
		 //.paginate({page:{limit:1,page:1}})
		Industry.find({sort: 'name' }).exec(function(err,industries){
			 	
			if(err){
					res.json({ status : "fail",data: err});
				}else{
					res.json({ status : "success",data: industries});
				}
		});
	}
	
};

