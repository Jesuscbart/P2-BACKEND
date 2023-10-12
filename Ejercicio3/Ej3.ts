//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 3
//Jesús Cuesta Bartolomé

// Tipos
export interface Book { 
    id: number;       //Id del libro
    title: string;    //Título del libro
    author: string;   //Autor del libro
    pages: number;    //Número de páginas del libro
    genre: string;    //Género del libro
}

const library: Book[] = []; // Inicializamos el array de libros vacío

//Función que permite crear un libro
const createBook = (): void => {
  const id = Number(prompt("Ingrese el ID del libro: ")); //Prompt devuelve un valor del tipo string, por lo que hay que convertirlo a number para obtener el ID correctamente
  const existingBook = library.find((book) => book.id === id);  //Devuelve el valor del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve undefined.
  if (existingBook) {                                           //Si el valor es distinto de undefined, ya existe un libro con el ID introducido
    console.log(`Ya existe un libro con el ID "${id}".`);
    return;                                                     //Devuelve el control al programa principal
  }                  
  
  const title = prompt("Ingrese el título del libro: ");                    //Ingresa el título del libro
  const author = prompt("Ingrese el autor del libro: ");                    //Ingresa el autor del libro
  const pages = Number(prompt("Ingrese el número de páginas del libro: ")); //Prompt devuelve un valor del tipo string, por lo que hay que convertirlo a number para obtener el número de páginas correctamente
  const genre = prompt("Ingrese el género del libro: ");                    //Ingresa el género del libro     

  const myBook: Book = { id, title, author, pages, genre };                 //Creamos un objeto de tipo Book con los datos introducidos por el usuario
  library.push(myBook);

  console.log(`El libro "${title}" ha sido agregado a la biblioteca.`);     //Muestra por consola el mensaje de que el libro ha sido agregado a la biblioteca
};

//Función que permite filtrar los libros por género
const filterBooks = (): void => {
  const genre = prompt("Ingrese el género que desea buscar: ");
  const filteredBooks = library.filter((book) => book.genre === genre);     //Devuelve un nuevo array con los libros que coinciden con el género introducido por el usuario

  if (filteredBooks.length === 0) {                                         //Si el array está vacío, no se han encontrado libros del género introducido
    console.log(`No se encontraron libros del género "${genre}".`);
  } else {
    console.log(`Libros del género "${genre}":`);                           //Si el array no está vacío, se han encontrado libros del género introducido
    filteredBooks.forEach((book) => console.log(book.title));               //Itera sobre el array de libros y muestra por consola el título de cada uno
  }
};

//Función que permite eliminar un libro
const deleteBook = (): void => {
  const id = Number(prompt("Ingrese el ID del libro que desea eliminar: "));
  const index = library.findIndex((book) => book.id === id);    //Devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
                                                                //Fuente: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  if (index === -1) {                                           
    console.log(`No se encontró ningún libro con el ID "${id}".`);  //Si el índice es -1, no se ha encontrado ningún libro con el ID introducido
  } else {
    const title = library[index].title;                    //Si el índice es distinto de -1, se ha encontrado un libro con el ID introducido
    library.splice(index, 1);                              //Elimina el libro del array. Fuente: https://www.tutorialspoint.com/typescript/typescript_array_splice.htm              
    console.log(`El libro "${title}" ha sido eliminado de la biblioteca.`);
  }
};

const main = (): void => {  //Función principal del programa con el menú de opciones
  let option: string;   //Variable option que es un string porque prompt devuelve un string
  do {
    console.log("Seleccione una opción:");  //Muestra por consola el menú de opciones
    console.log("1 - Crear libro");
    console.log("2 - Filtrar libro por género");
    console.log("3 - Borrar libro");
    console.log("4 - Salir");

    option = prompt("Opción seleccionada: "); //Pregunta al usuario la opción que desea seleccionar

    switch (option) {

      case "1":         //Crear libro
        createBook();   
        break;

      case "2":         //Filtrar libro por género
        filterBooks();
        break;

      case "3":         //Borrar libro
        deleteBook();
        break;

      case "4":         //Salir
        console.log("Saliendo del programa...");
        break;

      default:          //Opción por defecto en caso de que no se seleccione ninguna de las anteriores
        console.log("Opción inválida.");
        break;
    }
  } while (option !== "4");     //Mientras la opción seleccionada sea diferente de 4, se seguirá ejecutando el programa
};

main(); //Llamada a la función principal