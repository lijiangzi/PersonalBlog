var mysql = require("mysql");

function createConnection() {
    var connection = mysql.createConnection({
        host: "127.168.0.103",
        port: "3306",
        user: "root",
        password: "123456",
        database: "my_blog"
    });
    console.log('数据库连接成功')
    return connection;
}

module.exports.createConnection = createConnection;