const http = require('http');



const server = http.createServer((req, res) => {
  const currentHour = new Date().getHours();

  
  
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    if (currentHour < 12) {
      res.end('Buenos días, esta es la página principal');
    } else if (currentHour < 18) {
      res.end('Buenas tardes, esta es la página principal');
    } else {
      res.end('Buenas noches, esta es la página principal');
    }

  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la página "Acerca de"');

  }   else if (req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Esta es la página de contacto. Puedes escribirnos a: juansinpinsin@contactame.com');
  } else if (req.url === '/' || req.url === '/home') {
    if (req.url === '/home') {
      res.writeHead(301, { 'Location': '/' }); // Redirección a la página principal
      return res.end();}else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada. Las rutas disponibles son:\n- /\n- /about');
  }
}});

const port = 3006;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});