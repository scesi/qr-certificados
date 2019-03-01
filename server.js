
var express=require('express');
var bodyParser=require('body-parser');
var app=express();
var port=8085;
var models=require('./models/evento');
var id;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/certificate',(req, res) => {
  let body = req.body

  let certificado = new models.Certificado({
    nombres: body.nombres, 
    apellidos: body.apellidos,
    tipo: body.tipo,
    evento: body.evento, 
    codigo: body.codigo,
    fecha: body.fecha 
  })

  certificado.save((error, certificadoDB) => {
    if ( error ) {
      res.status(500).json({
        ok: false,
        error
      })
    } else {
      res.json({
        ok: true
      })
    }
  })
  
})

app.get('/verify/:id',(req, res) => {
  let id = req.params.id
  models.Certificado.findOne({ codigo : id }, 
    function (err, result) {
      if(err){
        res.status(400).send({status: "error"});  
      }else{
        res.json({
          status: "ok",
          result
        })  
      } 
    });
})
app.listen(port);
console.log('servidor iniciado');
