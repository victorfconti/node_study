let db_connection = require('../../config/db_connection')

module.exports = app => app.get('/noticias', (req, res)=>{
    let connection = db_connection()
    connection.query('select * from noticias', (error, result)=>res.render('noticias/noticias', {noticias: result}))
})