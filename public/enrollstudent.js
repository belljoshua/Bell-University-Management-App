function enrollStudent() {
    //get the id of the selected student from the dropdown
	var sid = document.getElementById('student_id').value
	//get the id of the selected class from the dropdown
	var cid = document.getElementById('class_id').value

	//Update `takes` table
	router.post('/', function(req, res){
        console.log(req.body)
        var mysql = req.app.get('mysql');
        var sql = "INSERT INTO takes (sid, cid) VALUES (?,?)";
        var inserts = [req.body.sid, req.body.cid];
        sql = mysql.pool.query(sql,inserts,function(error, results, fields){
            if(error){
                console.log(JSON.stringify(error))
                res.write(JSON.stringify(error));
                res.end();
            }else{
                res.redirect('/class');
            }
        });
    });
}