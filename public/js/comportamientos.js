// Va a servir cuando le piques a la imagen de Marina Bay Sands
                                                                                                                                                                                                                                                
const marina = document.getElementById("marina");
console.log(marina)
const cambiarimg = () => {
    console.log("Click en marina bay")
    marina.innerHTML =
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/1280px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg" alt="Marina Bay Sands" width="500" height="300">';
    marina.onclick = mostrarimg;
}

marina.onclick = cambiarimg;

const mostrarimg = () => {
    console.log("Click en marina bay")
    marina.innerHTML =
    '<img src="https://ik.imgkit.net/3vlqs5axxjf/external/ik-seo/https://www.cfmedia.vfmleonardo.com/imageRepo/2/0/186/208/259/20240826_Exterior_Architecture-17_O/Marina-Bay-Sands-Singapore-Exterior.jpg?tr=w-656%2Ch-390%2Cfo-auto" alt="Marina Bay Sands" width="500" height="300">' ;
    marina.onclick = cambiarimg;
}

marina.onclick = mostrarimg;