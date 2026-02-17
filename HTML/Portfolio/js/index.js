//alert("Alert Test");

let precio = 100;
const juego = "Cyberpunk 2077";

//  Prompt y confirm

//const fav = prompt("¿Cuál es tu juego favorito?");
//console.log("Tu juego favorito es: " + fav);
const confirmaciou = confirm("Esta pagina te va a robar todos tus datos, ¿quieres continuar?");
console.log("El usuario ha confirmado: " + confirmaciou);

// Functions (tradicionales)

function isprecio() {
    return precio;
}
console.log(isprecio());

// Funciones modernas
() => {} // Función flecha sin parámetros

const vidas = () => {
    console.log("Te quedan 3 vidas");
} 
vidas();

// Arreglos

const videojuegos = ["Cyberpunk 2077", "The Witcher 3", "Red Dead Redemption 2"];
const jugadores = new Array();
videojuegos[7] = "Elden Ring";

videojuegos.push("GoT");

// Arreglos asociativos (Recorrido arreglo)
for (var i = 0; i < videojuegos.length; i++) {
    console.log(videojuegos[i]);
}

// Recorridos alternativos 
//for (let juego in videojuegos) {
//   console.log(juego);
//}

// Objetos
const objeto = {};

const videojuego = {
    nombre: "Cyberpunk 2077",
    desarrollador: "CD Projekt Red",
    rating : 10};