//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 1
//Jesús Cuesta Bartolomé

// Tipos de datos
export interface ResponseData {
    statusCode:  number;        //Cósigo de estado de la respuesta
    message:     string;        //Mensaje de la respuesta
    pagination:  Pagination;    //Paginación de la respuesta
    totalQuotes: null;          //Cantidad total de citas
    data:        Data[];        //Array de ojetos Data que contienen las citas
}   

export interface Data { 
    _id: string;                //Identificador de la cita
    quoteText: string;          //Texto de la cita
    quoteAuthor: string;        //Autor de la cita
    quoteGenre: string;         //Género de la cita
    __v: number;                //Versión de la cita
}

export interface Pagination { 
    currentPage: null;          //Página actual
    nextPage:    null;          //Página siguiente
    totalPages:  null;          //Total de páginas
}

//Función asíncrona que imprime por consola los datos de las citas
  const printInfo = async () => {
    try {

      //Realiza una solicitud HTTP GET a la API para obeter las citas
      const response = await fetch(
        "https://quote-garden.onrender.com/api/v3/quotes?limit=30"  //Limito la cantidad de citas a 30 para poder imprimir 30 citas diferentes. 
      );                                                            //Utilizo ? para indicar que voy a pasar un parámetro y pongo el parámetro limit con valor 30
      
      //Analiza la respuesta como JSON y asigna los datos a la variable data
      const data: ResponseData = await response.json();

      //Itero sobre el array de citas y muestro por consola los datos de cada una
      data.data.forEach((quote: Data) => {
        console.log(`Genero: ${quote.quoteGenre} Autor: ${quote.quoteAuthor} Quote: ${quote.quoteText}`);
        console.log("--------------------------------------------------------------------------------");
      });

    // En caso de error, lo muestro por consola
    } catch (error) {
      console.log("Error:", error);
    }
  };

printInfo();    //Llamada a la función