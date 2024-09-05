const http = require('http');

let contador = 0;

const server = http.createServer((req, res) => {
  const userAgent = req.headers['user-agent']; // aqui detectamos el navegador

  if (req.url === '/old-page') {
    contador++; // Incrementamos el contador de redirecciones

    // Aqui redirigimos según el navegador del usuario
    if (userAgent.includes('Chrome')) {
      res.writeHead(301, { 'Location': '/new-page-chrome' });
    } else if (userAgent.includes('Firefox')) {
      res.writeHead(301, { 'Location': '/new-page-firefox' });
    } else {
      res.writeHead(301, { 'Location': '/new-page' });
    }
    res.end();

  } else if (req.url === '/new-page') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Esta es la nueva página. Has sido redirigido ${contador} veces.`);
    
 contador ++; } else if (req.url === '/new-page-chrome') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Bienvenido, usuario de Chrome, a la nueva página. Has sido redirigido ${contador} veces.`);
    
 contador ++; } else if (req.url === '/new-page-firefox') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Bienvenido, usuario de Firefox, a la nueva página. Has sido redirigido ${contador} veces.`);
    
  contador ++;} else {
    // Página no encontrada
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Página no encontrada');
  }
});

const port = 3008;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
