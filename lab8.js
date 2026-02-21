
const filesystem = require("fs");
// filesystem.writeFileSync("test.txt", "Hello, World!"); Hace un nuevo documento
// Se usa Sync (en node) para que las instrucciones sean asincronicas.

// Lab 8 - Introducción al back-end

// Prob 1 - Una función que reciba un arreglo de números y devuelva su promedio.
const arreglo = [1,2,3,4,5,6,7,8]; // Arreglo para sacar promedio
x = 0;

function promedio(arreglo) {
    for (let item of arreglo) {
        x += item
    }
    let promedio = x / arreglo.length;
    console.log(promedio);
    return promedio;
}

promedio(arreglo);

// Prob 2 - Una función que reciba un string y escriba el string en un archivo de texto. 

b = "Hola, este es un string que se va a escribir en un archivo de texto.";
function escribirArchivo(string) {
    filesystem.writeFileSync("archivo.txt", string);
}
//escribirArchivo(b);

// Prob 3 - Una función que reciba un string y lo imprima después de 10 segundos.

stbp = "String impreso despues de 10 segundos.";
function print10sec(string) {
    setTimeout(() => {
        console.log(string);
    }, 10000);
}

print10sec(stbp);


// Para hacer una pagina web 
const http = require("http");

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html");

    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About Me</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    padding: 20px;
                }
                h1 {
                    color: #333;
                }
            </style>
        </head>
        <body>
            <h1>ABOUT ME</h1>
            <p>
                My name is Juan Pablo Juárez Ortiz, I am 20 years old from Mexico.
                I am currently studying Systems Engineering at TEC.
            </p>
            <button>Click Me!</button>
        </body>
        </html>
    `);

    response.end();
});

server.listen(3000);