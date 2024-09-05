const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/') {
    res.end(JSON.stringify({ message: '¡Bienvenido!', status: 'success' }));
  } else if (req.url === '/user') {
    res.end(JSON.stringify({ name: 'Juan Santander', age: 19, status: 'success' }));
  } else if (req.url === '/products') {
    res.end(JSON.stringify([
      { id: 1, name: 'Producto 1', price: 100 },
      { id: 2, name: 'Producto 2', price: 150 }
    ]));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Página no encontrada', status: 'error' }));
  }
});

const port = 3001;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
