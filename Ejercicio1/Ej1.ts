//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 1
//Jesús Cuesta Bartolomé

// Tipos
export interface ResponseData {
    statusCode:  number;
    message:     string;
    pagination:  Pagination;
    totalQuotes: null;
    data:        Data[];
}   

export interface Data {
    _id: string;
    quoteText: string;
    quoteAuthor: string;
    quoteGenre: string;
    __v: number;
}

export interface Pagination {
    currentPage: null;
    nextPage:    null;
    totalPages:  null;
}

const printInfo = () => {
  fetch("https://quote-garden.onrender.com/api/v3/quotes")
    .then((response) => response.json())
    .then((data: ResponseData) => {
        console.log("Status:",data.statusCode);
        data.data.forEach((data: Data) => {
            console.log(`Género: ${data.quoteGenre} Autor: ${data.quoteAuthor} Quote: ${data.quoteText}`);
            console.log("---------------------------------");
        });
    })
    .catch((error) => console.log(error));
};

printInfo();   
