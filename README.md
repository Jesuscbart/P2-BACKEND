# Practica 2 - Grupo B
Para esta segunda práctica se pide que se realicen peticiones hacia una API REST para entender el funcionamiento de las Promesas y el funcionamiento del manejo de datos en internet

## Ejercicio 1
Para este primer ejercicio se pide hacer una petición GET al siguiente endpoint: Quote Garden - Star on GitHub | QuoteGarden (pprathameshmore.github.io) 

Este servicio nos devolverá un listado de cuotas. Una vez obtengamos las cuotas deberemos imprimir por pantalla la información del siguiente modo.
Se debe cambiar la X por cada campo de la respuesta:

"Genero: x Autor: x Quote: x"

Punto extra: Cada llamada imprime 10 cuotas, buscar la manera de obtener 30 cuotas distintas

Ejemplo practico: 
example.ts
 
## Ejercicio 2
Para este segundo ejercicio se pide que el usuario sea capaz de escribir por consola el nombre de un Pokémon para después imprimir por pantalla su información. PokéAPI (pokeapi.co)

Para esta parte del ejercicio se tendrá que usar la API de Deno Input Prompts - Deno by Example.

Los datos que se deberán mostrar son:
* Nombre
* tipo/tipos
* id

Punto extra: Antes de pedir al usuario el nombre del Pokémon. Indicar con un 1 o un 2 si se quiere buscar un tipo o un Pokémon respectivamente. Para el tipo imprimir lo siguiente:
* Tipo
* Generación

## Ejercicio 3
Teniendo en cuenta el ejercicio anterior, se pide crear un programa CLI Command Line Interface para una biblioteca. El tipo de un Libro será:

* id: Identificador único del libro. NO PUEDE HABER DOS IGUALES
* title
* author
* pages
* genre

Tendremos las siguientes opciones:
* 1 - Crear libro
* 2 - Filtrar libro por género
* 3 - Borrar libro
* 4 - Salir

Punto extra: Realizar test de cada función siguiendo la guía oficial de Deno