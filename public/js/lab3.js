
// Prob 1 - Entrada: un número pedido con un prompt. Salida: Una tabla con los números del 1 al número dado con sus cuadrados y cubos. Utiliza document.write para producir la salida
let numped = parseInt(prompt("Dame un número del 1 al 10"));

document.write("<table border='1'>");
document.write("<tr>"); // tr = table row, th = table header, td = table data
document.write("<th>Número</th>");
document.write("<th>Cuadrado</th>");
document.write("<th>Cubo</th>");
document.write("</tr>");

for (let i = 1; i <= numped; i++) {
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + (i * i) + "</td>");
    document.write("<td>" + (i * i * i) + "</td>");
    document.write("</tr>");
 }

document.write("</table>");

// Prob 2 - Entrada: Usando un prompt se pide el resultado de la suma de 2 números generados de manera aleatoria. Salida: La página debe indicar si el resultado fue correcto o incorrecto, y el tiempo que tardó el usuario en escribir la respuesta
let numran1 = Math.floor(Math.random() * 10) + 1; // Genera un número aleatorio entre 1 y 10
let numran2 = Math.floor(Math.random() * 10) + 1; // Genera otro número aleatorio entre 1 y 10
let sumran = numran1 + numran2; // Suma los dos números aleatorios
let timestart = Date.now(); // Marca el tiempo de inicio
let useranswer = (prompt("¿Cuánto es " + numran1 + " + " + numran2 + "?")); // Pide al usuario que responda la suma
let timeend = Date.now(); // Tiempo final
let timeelapsed = (timeend - timestart) / 1000; // Calcula el tiempo transcurrido en segundos
if (useranswer == sumran) {
    console.log("¡Correcto! Respondiste en " + timeelapsed + " segundos.");
} else {
    console.log("Incorrecto. La respuesta correcta es " + sumran + ". Respondiste en " + timeelapsed + " segundos.");
}

// Prob 3 - Función: contador. Parámetros: Un arreglo de números. Regresa: La cantidad de números negativos en el arreglo, la cantidad de 0's, y la cantidad de valores mayores a 0 en el arreglo.
function contador(arreglo) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 0) {
            negativos++;
        } else if (arreglo[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    return {
        negativos: negativos,
        ceros: ceros,
        positivos: positivos
    };
}

let numeros = ([-2, -1, 0, 1, 2, 3]); // Ejemplo de uso, regresa {negativos: 2, ceros: 1, positivos: 3}
console.log("contador(numeros):", contador(numeros));


// Prob 4 - Función: promedios. Parámetros: Un arreglo de arreglos de números. Regresa: Un arreglo con los promedios de cada uno de los renglones de la matriz.
function promedios(matriz) {
    let resultado = [];

    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }

        let promedio = suma / matriz[i].length;
        resultado.push(promedio);
    }
    return resultado;
}

let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; // Ejemplo de uso, regresa [2, 5, 8]
console.log("promedios(matriz):", promedios(matriz));

// Prob 5 - Función: inverso. Parámetros: Un número. Regresa: El número con sus dígitos en orden inverso
function inverso(numero) {
    let invertido = numero
        .toString()
        .split("") // Los convierte en un arreglo de caracteres
        .reverse() // Invierte el orden de los dígitos
        .join(""); // los une otra vvez

    return parseInt(invertido);
}

console.log("inverso(62058):", inverso(62058)); // Ejemplo de uso, regresa 85026
5

// 