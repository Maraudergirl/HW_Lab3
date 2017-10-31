# HW_Lab3

## General

* Página para resolucion de problemas matematicos.
* Para polinomios se eligio la ecuacion cuadratica.
* Para triangulos se eligio el calculo de sus angulos interiores dados sus 3 lados.

********************************************************************************************************

## index.html

* Es la página de inicio. 
* Es solo un mensaje de bienvenida.
* Se puede acceder a los problemas con la barra de navegacion.

********************************************************************************************************

## polinomio.html

* Es la página del problema de polinomio.
* Esta divida principalmente en un bloque de pregunta y otro de respuesta.
* Inicialmente solo se ve el bloque de pregunta.
* Se presenta la forma canonica de la ecuacion cuadratica, y se tienen espacios de input, para adquirir los coeficientes.
* Una vez dados estos coeficientes, se esconde el bloque de pregunta y se muestra el bloque de respuesta.
* En el bloque de respuesta se presenta la ecuacion dada por el usuario y sus soluciones, respectivas. Además se presenta una leve explicacion de como se obtuvieron los resultados.
* Se puede acceder al resto de las paginas con la barra de navegacion.

********************************************************************************************************

## triangulo.html

* Es la página del problema de triangulo.
* Esta divida principalmente en una descripcion, un bloque de pregunta y otro de respuesta.
* Se describe un triangulo y sus caracteristicas principales.
* Inicialmente se ve la descripcion y el bloque de pregunta.
* Se presenta un bloque donde el usuario puede entregar los lados de un triangulo.
* Una vez dados los valores, se esconde solamente el bloque de pregunta y se muestra el bloque de respuesta.
* En el bloque de respuesta se presenta un dibujo del triangulo descrito y los valores de sus angulos.
* Se puede acceder al resto de las paginas con la barra de navegacion.

********************************************************************************************************

## index.css, polinomio.css, triangulo.css

* Aquí es donde se le dió el estilo a las páginas.
* Seleccion de colores, formato, etc..

********************************************************************************************************

## polinomio.js

* Solo tiene una funcion, solvePoli().
* SolvePoli(): Se encarga de leer los coeficientes dados, hacer el calculo de las soluciones de la ecuacion cuadratica y mostrar los resultados en la página.

********************************************************************************************************

## triangulo.js

* Tiene las funciones: isTriangle(), orderSides(), drawTriangle(), y solveTriLLL().
* isTriangle(): Ve si los lados entregados por el usuario pueden formar un triangulo.
* orderSides(): Ordena los lados del triangulo.
* drawTriangle(): Se encarga de dibujar el triangulo a partir de los lados dados por el usuario.
* solveTriLLL(): Funcion que se llama desde el html, se encarga de hacer toda la logica correspondiente a buscar la solucion del triangulo. Usa las funciones mencionadas.

********************************************************************************************************
********************************************************************************************************
El código está levemente comentado.