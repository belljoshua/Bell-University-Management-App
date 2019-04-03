module.exports = function(){
    var express = require('express');
    var router = express.Router();


    /*Display all building. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = [];
        res.render('test', context);
    });


    return router;
}();
