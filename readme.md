# Desafío 3 Javascript: Funciones
## Fecha: 15-06-2024

1. Transforma esta declaración de función a una función de expresión. El ejercicio debe
quedar en un archivo nombrado `1_funcion.js`

```
const example = function(a, b, c){
    return a+b+c
}

```

2. Transforma la siguiente función a una arrow function de una línea. Este ejercicio
debe quedar en un archivo llamado `2_arrow.js`

```
suma = (a, b) => a + b

```

2.2. Modifica la función para que reciba el elemento clickeado de forma de no
tener que seleccionarlo nuevamente dentro de la función (1 Punto).
Para obtener el puntaje, debes entregar los archivos pintar.html y script.js
funcionando en conjunto con el código modificado.

```

 const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
    const pintar = () => ele.style.backgroundColor = 'yellow';
    
    pintar();
});

```