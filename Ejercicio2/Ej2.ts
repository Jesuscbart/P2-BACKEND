//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 1
//Jesús Cuesta Bartolomé

export interface ResponseData {
    statusCode:  number;
    message:     string;
    totalQuotes: null;
    data:        Pokemon[];
}   

export interface Pokemon {
    name: string;
    data: Types[];
    id: number;
}

export interface Types {
    name: string;
}

const select = prompt("Seleccione una opción: Buscar tipo [1] | Buscar pokemon [2]");
console.log("Selección:", select);

if (select === `1`){

    console.log("Has seleccionado la opción 1");
    
    
}
else if (select === `2`){

    console.log("Has seleccionado la opción 2");

    const nombre = prompt("Escriba el nombre de un pokemon (en minúsculas): ");
    console.log("Selección:", nombre);
    console.log(nombre);

    const printInfo = () => {
        fetch(`https://pokeapi.co/api/v2/type/${nombre}`)
          .then((response) => response.json())
          .then((data: Pokemon) => {
              console.log("Status:",data.statusCode);
              data.data.forEach((data: Pokemon) => {
                  console.log(`Nombre: ${data.name} Id: ${data.id}`);
              });
          })
          .catch((error) => console.log(error));
      };

    printInfo(); 


}
else {  

    console.log("Opción inválida");
}
