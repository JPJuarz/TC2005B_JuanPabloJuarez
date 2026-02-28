//Cambio a strong o de font
const aucol = document.getElementById("title");
aucol.onclick = () => {
    console.log("Click en título");
    aucol.innerHTML = "<strong>AUTO COLLECTION</strong>";
    aucol.onclick = () => {
        console.log("Click en título");
        aucol.innerHTML = "<font color='aqua'>AUTO COLLECTION</font>";
    }
}

// Agarra cada elemento
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
// booleanos para saber qué mostrar
let showingImage1 = true;
let showingImage2 = true;
let showingImage3 = true;

// Función para alternar entre imagen y descripción coche 1
const toggleCar1 = () => {
    if (showingImage1) {
        console.log("Mostrando descripción");
        box1.innerHTML =
            "<p style='text-align:center;'>" +
            "<strong>Koenigsegg Agera RS</strong><br>" +
            "2015<br>" +
            "$2,900,000 MXN<br>" +
            "16% IVA" +
            "</p>";
    } else {
        console.log("Mostrando imagen");
        box1.innerHTML =
            "<img id='car1' " +
            "src='https://preview.redd.it/n318gixedw581.jpg?width=640&crop=smart&auto=webp&s=2fd1e8dcfdd4741bbaa81a3134dccc5a22f10162' " +
            "alt='Koenigsegg'>";
    }
    showingImage1 = !showingImage1;
};

// Función para alternar entre imagen y descripción coche 2
const toggleCar2 = () => {
    if (showingImage2) {
        console.log("Mostrando descripción");
        box2.innerHTML =
            "<p style='text-align:center;'>" +
            "<strong>Ferrari La Ferrari</strong><br>" +
            "2012<br>" +
            "$3,200,000 MXN<br>" +
            "16% IVA" +
            "</p>";
    } else {
        console.log("Mostrando imagen");
        box2.innerHTML =
            "<img id='car2' " +
            "src='https://e1.pxfuel.com/desktop-wallpaper/173/1013/desktop-wallpaper-ferrari-50-hq-vertical-car.jpg' " +
            "alt='Ferrari'>";
    }
    showingImage2 = !showingImage2;
};

// Función para alternar entre imagen y descripción coche 3
const toggleCar3 = () => {
    if (showingImage3) {
        console.log("Mostrando descripción");
        box3.innerHTML =
            "<p style='text-align:center;'>" +
            "<strong>Pagani Huayra</strong><br>" +
            "2014<br>" +
            "$2,500,000 MXN<br>" +
            "16% IVA" +
            "</p>";
    } else {
        console.log("Mostrando imagen");
        box3.innerHTML =
            "<img id='car3' " +
            "src='https://i.pinimg.com/736x/5a/f9/64/5af9646c98d23e9794b358e78db9e818.jpg' " +
            "alt='Pagani'>";
    }
    showingImage3 = !showingImage3;
};

box1.onclick = toggleCar1;
box2.onclick = toggleCar2;
box3.onclick = toggleCar3;

// Total (E IVA y todo eso)
// Precios
const price1 = 2900000;
const price2 = 3200000;
const price3 = 2500000;

// Inputs
const qty1 = document.getElementById("qty1");
const qty2 = document.getElementById("qty2");
const qty3 = document.getElementById("qty3");

// Total e IVA
const totalSpan = document.getElementById("total");
const ivaSpan = document.getElementById("iva");

const IVA_RATE = 0.16;

const updateTotal = () => {
    const total =
        qty1.value * price1 +
        qty2.value * price2 +
        qty3.value * price3;

    const iva = total * IVA_RATE;

    totalSpan.textContent = total.toLocaleString();
    ivaSpan.textContent = iva.toLocaleString();
};

// Escuchar cambios
qty1.addEventListener("input", updateTotal);
qty2.addEventListener("input", updateTotal);
qty3.addEventListener("input", updateTotal);
