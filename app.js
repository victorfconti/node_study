let app = require('./config/server')

require('./app/routes/formulario_inclusao_noticias')(app)
require('./app/routes/home')(app)
require('./app/routes/noticias')(app)

app.listen(3000, ()=>console.log('Servidor rodando com o express'))