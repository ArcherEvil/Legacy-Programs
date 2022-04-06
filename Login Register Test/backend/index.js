
const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static("styles"))


app.get('/', function(req, res) {
    res.sendFile('/public/index.html', { root: __dirname })

 })

 app.get('/login', function(req, res) {
   res.sendFile('/public/login/index.html', { root: __dirname })
})

app.get('/register', function(req, res) {
   res.sendFile('/public/register/index.html', { root: __dirname })
})

app.post('/login', function(req, res) {
   console.log(req.body)

})




 app.listen(3000, function(){
    console.log('Servidor iniciado na porta 3000')
 })