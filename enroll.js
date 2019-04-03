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

    function getClasses(res, mysql, context, complete){
        mysql.pool.query("SELECT C.cid, C.title, P.name AS prof, B.name AS building FROM class C INNER JOIN building B on B.bid = C.building INNER JOIN professor P on P.fid = C.prof", function(error, results, fields){
            if(error){
                res.write(JSON.stringify(error));
                res.end();
            }
            context.class = results;
            complete();
        });
    }

    /*Display all building. Requires web based javascript to delete users with AJAX*/

    router.get('/', function(req, res){
        var callbackCount = 0;
        var context = {};
        context.jsscripts = [];
        var mysql = req.app.get('mysql');
        getStudent(res, mysql, context, complete);
        getClasses(res, mysql, context, complete);
        function complete(){
            callbackCount++;
            if(callbackCount >= 2){
                res.render('enroll', context);
            }
 
        }
    });


    /* Adds a person, redirects to the building page after adding */

    router.post('/', function(req, res){
        console.log(req.body.homeworld)
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO takes VALUES (?,?)";
        var inserts = [req.body.sid, req.body.cid];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/enroll');
            }
        });
    });

    return router;
}();
