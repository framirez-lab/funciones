# Desafío 3 Javascript: Funciones
## Fecha: 15-06-2024

1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
quedar en un archivo nombrado `1_funcion.js`

``` JS
const example = function(a, b, c){
    return a+b+c
}

```

2. Transforma la siguiente función a una arrow function de una línea. Este ejercicio
debe quedar en un archivo llamado `2_arrow.js`

``` JS
suma = (a, b) => a + b

```

2.2. Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto).
Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
funcionando en conjunto con el código modificado.

``` JS

 const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
    const pintar = () => ele.style.backgroundColor = 'yellow';
    
    pintar();
});

```

2.3. Modifica el código anterior para poder pasarle un color como argumento a la
función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
párrafo se debe pasar amarillo como color. 

``` JS

const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
    const pintar = (color = 'green') => ele.style.backgroundColor = color;

    pintar('yellow');
});

```

3. Construye una página web 4_colores.html 

Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento

``` JS
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

```