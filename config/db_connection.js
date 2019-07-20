let mysql = require('mysql')

module.exports = ()=> mysql.createConnection({
    host : 'localhost',
    user: 'root',
    password: '123',
    database: 'portal_noticias' 
});