

  const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 2500; 

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('bienvenido', {title: 'ofetas de electromdomesticos', message: 'Bienvenido a ofertas.com'});
});

app.post('/api/registro', (req, res) => {
  const nombre = req.body.nombre;
  const edad = req.body.edad;
  const correo = req.body.correo;

 
  console.log('Nombre:', nombre);
  console.log('Edad:', edad);
  console.log('Correo:', correo);

 
  res.send('Datos recibidos ');
});


app.listen(port, () => {
  console.log(`Servidor escuchado ${port}`);
});

