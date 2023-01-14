// 1. 导入mysql
var mysql = require("mysql")
//2. 创建一个连接对象，配置数据库信息
var connection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    port: 3306,
    password:"123456",
    database:"curryting"
})
// 3. 连接数据库
connection.connect();
// 4. 查询数据
// connection.query("insert into user(name,number,password,gender) values('qqq',2,'dsdss',0)", function(error,results,fields){
    // connection.query("update user set name='rrrrrrrrrrrr' where name='qqq'", function(error,results,fields){
        connection.query("delete from user where name='rrrrrrrrrrrr'", function(error,results,fields){
//    connection.query("select * from user", function(error,results,fields){
    if(error){ 
        throw error;
    }
    console.log("results",  results)
})
// 5. 关闭连接
connection.end()