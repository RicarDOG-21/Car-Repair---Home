const imagenes = [
    'img/background_01.jpg',
    'img/background_02.jpg',
    'img/background_03.jpeg',
];

const d = document,
    tamaño = imagenes.length,
    contenedorPrincipal = d.querySelector('.contenido-principal'),
    previo = d.querySelector('.previo'),
    siguiente = d.querySelector('.siguiente');

let indice = 0;

previo.addEventListener("click", () => {
    indice--;
    colocarImagenes();
    cambiarFondo(imagenes[indice], contenedorPrincipal);
});

siguiente.addEventListener("click", () => {
    indice++;
    colocarImagenes();
    cambiarFondo(imagenes[indice], contenedorPrincipal);
});

function colocarImagenes() {
    if(indice < 0) indice = tamaño - 1;
    if(indice === tamaño) indice = 0;
}

function cambiarFondo(backgroundImage, element) {
    element.style.backgroundImage = `url(${backgroundImage})`;
}