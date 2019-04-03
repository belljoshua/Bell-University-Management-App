module.exports = function(){
    var express = require('express');
    var router = express.Router();

    function getStudent(res, mysql, context, complete){
        mysql.pool.query("SELECT sid, name FROM student", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.student = results;
            complete();
        });
    }

    function getClassesbyStudent(req, res, mysql, context, complete){
        var query = "SELECT C.title FROM class C INNER JOIN takes T ON T.cid = C.cid WHERE T.sid = ?";
        console.log(req.params)
        var inserts = [req.params.sid]
        mysql.pool.query(query, inserts, function(error, results, fields){
              if(error){
                  res.write(JSON.stringify(error));
                  res.end();
              }
              context.taking= results;
              complete();
          });
      }

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["filterpeople.js"];
        var mysql = req.app.get('mysql');
        getStudent(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 1){
                res.render('taking', context);
            }

        }
    });

    router.get('/filter/:sid', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = ["deleteperson.js","filterpeople.js","searchpeople.js"];
        var mysql = req.app.get('mysql');
        getStudent(res, mysql, context, complete);
        getClassesbyStudent(req,res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 2){
                res.render('taking', context);
            }

        }
    });


    return router;
}();
