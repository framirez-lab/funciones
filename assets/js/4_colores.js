/* Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. */

const azul = document.getElementById('azul');
const rojo = document.getElementById('rojo');
const verde = document.getElementById('verde');
const amarillo = document.getElementById('amarillo');
    
function cambiarColor() {
    this.style.backgroundColor = 'black';
}

azul.addEventListener('click', cambiarColor);
rojo.addEventListener('click', cambiarColor);
verde.addEventListener('click', cambiarColor);
amarillo.addEventListener('click', cambiarColor);