const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();

  res.end(`
    <html>
    <head>
    <title> PAGINA HTML DE JUANNN!!!</title>
      <style>
        body {
          background-color: lightblue;
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>

    <a href="    https://www.google.com/url?sa=i&url=https%3A%2F%2Fitp.edu.co%2FITP2022&psig=AOvVaw2tzrEqVrGgU6CmOZF68xji&ust=1725587641321000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjLkoTZqogDFQAAAAAdAAAAABAE
    ">Visita el sitio web del itp</a>
      <h1> Hola, Mundo</h1>
      <p>Esta es una página HTML simple, soy el estudiante Juan Santander y este es el punto 1.</p>
      <p>La hora actual es: ${currentTime}</p>
    </body>
    </html>
  `);
});

const port = 3002;
server.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
