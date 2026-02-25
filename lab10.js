const http = require("http");
const fs = require("fs");

// HTML base
const header = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lab Node</title>
</head>
<body>
    <h1>Aplicación Web usando Node y Rutas</h1>
    <hr>
`;

const footer = `
</body>
</html>
`;

const home = `
<p>Bienvenido a la página principal</p>
<a href="/about">About</a><br>
<a href="/form">Formulario</a><br>
<a href="/contacto">Contacto</a>
`;

const about = `
<p>Esta es una aplicación hecha con Node.js</p>
`;

const contacto = `
<p>Contacto: A01708685@tec.mx</p>
`;

const form = `
<form action="/guardar" method="POST">
    <label>Nombre:</label><br>
    <input type="text" name="nombre"><br><br>

    <label>Mensaje:</label><br>
    <input type="text" name="mensaje"><br><br>

    <button type="submit">Guardar</button>
</form>
`;

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write(header + home + footer);
        res.end();

    } else if (req.url === "/about" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write(header + about + footer);
        res.end();

    } else if (req.url === "/contacto" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write(header + contacto + footer);
        res.end();

    } else if (req.url === "/form" && req.method === "GET") {
        res.setHeader("Content-Type", "text/html");
        res.write(header + form + footer);
        res.end();

    } else if (req.url === "/guardar" && req.method === "POST") {
        const datos = [];
        req.on("data", chunk => {
            datos.push(chunk);
        });

        req.on("end", () => {
            const dataString = Buffer.concat(datos).toString();
            fs.appendFileSync("datos.txt", dataString + "\n");
            res.writeHead(302, { Location: "/" });
            res.end();
        });

    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html");
        res.write(header + "<h2>Error 404 - Ruta no encontrada</h2>" + footer);
        res.end();
    }

});

server.listen(4000);