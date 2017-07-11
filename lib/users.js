'use strict';
var Db = require('mongodb').Db,
    MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server,
	ObjectId = require('mongodb').ObjectID;

module.exports={
getOTPForUserWith : function (name) { 
var url = 'mongodb://localhost:27017/mydb';
return MongoClient.connect(url).then(function(db) {
    var coll=db.collection('users');
return coll.find({"user":"jv"}).toArray();
}).then(function(res){
		console.log(res);
		return res;
});
}
};