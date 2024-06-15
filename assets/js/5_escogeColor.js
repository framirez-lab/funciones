let colorGlobal = '';

const keyDiv = document.getElementById('key');
const cambiarColor = (color) => keyDiv.style.backgroundColor = color;

document.addEventListener('keydown', function(event) {
    let teclaPresionada = event.key.toLowerCase();

    if (teclaPresionada === 'a') {
        colorGlobal = 'pink'; 
        cambiarColor(colorGlobal);
    } else if (teclaPresionada === 's') {
        colorGlobal = 'orange'; 
        cambiarColor(colorGlobal);
    } else if (teclaPresionada === 'd') {
        colorGlobal = 'lightblue';
        cambiarColor(colorGlobal);
    }

    if (teclaPresionada === 'q') {
        colorGlobal = 'purple';
        crearNuevoDiv(colorGlobal);
    } else if (teclaPresionada === 'w') {
        colorGlobal = 'gray';
        crearNuevoDiv(colorGlobal);
    } else if (teclaPresionada === 'e') {
        colorGlobal = 'brown';
        crearNuevoDiv(colorGlobal);
    }
});

function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.margin = '10px';
    document.body.appendChild(nuevoDiv);
}
