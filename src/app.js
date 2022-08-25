let express = require('express')
let bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extened: true}))


require('./route.js')(app)


app.get('/num1/:4',function(req,res){
    res.send('รับค่า'+req.params.person)
})

app.get('/num2/:2',function(req,res){
    res.send('รับค่า'+req.params.person)
})

app.get('num1*num2',function(req,res){
    res.send('รวม'+req.params.person)
})


app.post('/num',function(req,res){
    res.send('8'+req.params.person)
})

let port = 8081

app.listen(port, function () {
    console.log('server running on ' + port)
})