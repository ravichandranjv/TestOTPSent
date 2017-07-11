var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;
var router=express.Router;
var users=require('./lib/users.js');
app.route('/about/:name')
.get(function(req,res){
    users.getOTPForUserWith(req.params.name).then(function(items) {
      res.json({        
        user: items
      });
    },function(err){

});

});
app.use('/',router);
app.listen(port);
console.log('Server listening on port ' + port);
module.exports.server=app;
