//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 1
//Jesús Cuesta Bartolomé

//Para este primer ejercicio se pide hacer una petición GET al siguiente endpoint: Quote Garden - Star on GitHub | QuoteGarden (pprathameshmore.github.io) 
//Este servicio nos devolverá un listado de cuotas. Una vez obtengamos las cuotas deberemos imprimir por pantalla la información del siguiente modo.
//Se debe cambiar la X por cada campo de la respuesta:
//  "Genero: x Autor: x Quote: x"
//Punto extra: Cada llamada imprime 10 cuotas, buscar la manera de obtener 30 cuotas distintas

// Tipos
export interface ResponseData { //Interfaz para el JSON que devuelve la API
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Data[];
}   

export interface Data { //Interfaz para el array de datos que devuelve la API
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
}

export interface Pagination {   //Interfaz para la paginación que devuelve la API
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}
/*
//Función asíncrona que hace la llamada a la API y muestra los datos por pantalla
const printInfo = async () => {
    try {
      let quotes: Data[] = [];
      for (let i = 1; i <= 3; i++) {
        const response = await fetch(`https://quote-garden.onrender.com/api/v3/quotes?page=${i}&limit=10`);
        const data: ResponseData = await response.json();
        quotes = quotes.concat(data.data);
      }
      quotes.slice(0, 30).forEach((quote: Data) => {
        console.log(`Genero: ${quote.quoteGenre} Autor: ${quote.quoteAuthor} Quote: ${quote.quoteText}`);
        console.log("---------------------------------");
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };*/


  const printInfo = async () => {
    try {
      const response = await fetch("https://quote-garden.onrender.com/api/v3/quotes?limit=30");
      const data: ResponseData = await response.json();
      data.data.forEach((quote: Data) => {
        console.log(`Genero: ${quote.quoteGenre} Autor: ${quote.quoteAuthor} Quote: ${quote.quoteText}`);
        console.log("---------------------------------");
      });
    } catch (error) {
      console.log("Error:", error);
    }
  };

printInfo();    //Llamada a la función
