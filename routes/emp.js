const express = require('express')

const appForEmps = express.Router();


const mysql = require('mysql');
var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'manager',
    database: 'lab'
});

appForEmps.get("/", (request, response)=>{

    connection.query("SELECT * FROM Employee_Tb", (error, result)=>{
        if(error == null)
        {
            var data = JSON.stringify(result);  
            response.setHeader("Content-Type", "application/json");    
            response.write(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type", "application/json");     
            response.write(error);
        }
        response.end();
    })
        
})


appForEmps.post("/", (request, response)=>{
    var query = `INSERT INTO Employee_Tb(id, e_name, email, password, emp_id, dname, doj) values('${request.body.id}', '${request.body.e_name}', '${request.body.email}', '${request.body.password}', '${request.body.emp_id}', '${request.body.dname}', '${request.body.doj}')`;

    connection.query(query, (error, result)=>{
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.write(error);
        }
        response.end();
    })
})


appForEmps.put("/:id", (request,response)=>{

    var PUTquery = `UPDATE Employee_Tb SET 
                        dname = '${request.body.dname}', doj = '${request.body.doj}' 
                        WHERE id = ${request.params.id}`;

    connection.query(PUTquery, (error,result)=>{
                if(error == null)
                {
                    var data = JSON.stringify(result);
                    response.setHeader("Content-Type", "application/json");
                    response.write(data);
                }
                else
                {
                    console.log(error);
                    response.setHeader("Content-Type", "application/json");
                    response.write(error);
                }
                response.end();
    })
})


appForEmps.delete("/:id", (request, response)=>{
    var DELquery = `DELETE FROM Employee_Tb 
                    WHERE id = ${request.params.id}`;
    
    connection.query(DELquery, (error,result)=>{
        if(error == null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type", "application/json");
            response.write(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type", "application/json");
            response.write(error);
        }
        response.end();
    })
})



module.exports= appForEmps;








































