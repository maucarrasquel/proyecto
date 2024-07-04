const adminRoutes = require('./router/main');
const sequelize = require("./config/conexion");
const express = require('express');
const http = require('http');
const path = require('path');
const port = 3000;
const app = express();
// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, '/public')));

// Instancia del servidor
const server = http.createServer(app);

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));


// Configuración de recuperación de datos y envío
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

sequelize
  .authenticate()
  .then(() =>{
    console.log('Conexión a la base de datos establecida correctamente');
    // Sincronización del modelo con la base de datos
    return sequelize.sync({ force:false});
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos', error.message);
  });

// Routers
app.use('/', adminRoutes);

server.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});








