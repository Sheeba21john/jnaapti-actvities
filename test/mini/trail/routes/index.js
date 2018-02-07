var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db =  mongojs('contact_app', ['my_contacts']);
/* GET home page */
router.get('/', function(req, res, next) {
	db.my_contacts.find().toArray(function (err,result){
		if(err) 
			throw err;
			console.log(result);
		res.render('index',{title:"Contact Management", result: result});
	});
});

router.get('/add', function(req, res, next){
    res.render('add');
});

   router.post('/add_contact', function(req, res, next){
  	 var name = req.body.name;
   	 var number = req.body.number;
   	 var sample = req.files.file;
   	 sample.mv(__dirname+'/../public/images/'+req.body.name+'.png',function(err){
   		if(err)
   			return res.status(500).send(err);
   	res.send("Uploaded");

   });
   
   var category = req.body.category;
   db.my_contacts.insert({name: name, number: number, category: category});

});

router.get('/delete', function(req, res, next){
	res.render('delete');
});

router.post('/delete_contact/:name', function(req, res, next){
   var name = req.params.name;
   db.my_contacts.remove({name: name});
   db.my_contacts.find().toArray(function (err,result){
		if(result.length==1)
			res.render('display',{result: result});
		else 
			res.send("Contact doesn't exist.");
	   });
});

router.get('/update', function(req, res, next){
	res.render('update');
});

router.post('/update_contact', function(req, res, next){
	var name = req.body.name;
	var number = req.body.number;
	db.my_contacts.update({name: name}, {name: name, number: number}, {upsert: true});
	db.my_contacts.find({name:name}).toArray(function (err,result){
		console.log(result.length);
		if(result.length==1)
			res.send("Updated");
		else 
			res.send("Contact doesn't exist.");
	});
});

router.get('/display', function(req, res, next){
	db.my_contacts.find().toArray(function (err,result){
		if(err) 
			throw err;
		res.render('display',{result: result});
	});
});

module.exports = router;
