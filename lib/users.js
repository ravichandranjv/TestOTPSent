'use strict';
var MongoClient = require('mongodb').MongoClient;
module.exports={
getOTPForUserWith : function (name) { 
var url = 'mongodb://localhost:27017/mydb';
return MongoClient.connect(url).then(function(db) {
    var coll=db.collection('users');
return coll.find({"user":name}).toArray();
}).then(function(result){
		return result;
});
}
};
