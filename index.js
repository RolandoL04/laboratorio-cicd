const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).send('Status 200 OK - Laboratorio-cicd');
});

// Exportamos la app para las pruebas, pero solo escuchamos si se ejecuta directamente
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
  });
}

module.exports = app;
