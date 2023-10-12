//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 2
//Jesús Cuesta Bartolomé

export interface ResponseData { 
    statusCode:  number;            //Código de estado de la respuesta
    message:     string;            //Mensaje de la respuesta
    data:        Pokemon[];         //Array de ojetos Data que contienen los pokemons
}   

export interface Pokemon {          
    name: string;                   //Nombre del pokemon
    types: Types[];                 //Array de objetos Types que contienen los tipos del pokemon
    id: number;                     //Id del pokemon
    generation: string;             //Generación del pokemon
}

export interface Types {
    slot: number;                   //Slot del tipo
    type: { 
      name: string;                 //Nombre del tipo
      url: string;                  //Url del tipo
    };
  }

const searchPokemon = async () => { //Función asíncrona que busca un pokemon o un tipo de pokemon y muestra sus datos por consola

  try{

    // Pregunta al usuario si quiere buscar un tipo de pokemon o un pokemon
    const select = prompt("Seleccione una opción: Buscar tipo [1] | Buscar pokemon [2]");
    console.log("Selección:", select);

    if (select === `1`){    //Si se selecciona la opción 1, se busca un tipo de pokemon

        const tipo = prompt("Escriba en inglés el tipo de pokemon que desea buscar (en minúsculas): "); //Pregunta al usuario el tipo de pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/type/${tipo}`);                         //Realiza una solicitud HTTP GET a la API para obeter los datos del tipo de pokemon
        const data: Pokemon = await response.json();                                                    //Analiza la respuesta como JSON y asigna los datos a la variable data
        console.log("Tipo:",data.name);                                                                 //Muestra por consola el nombre del tipo de pokemon
        console.log("Generación:",data.generation);                                                     //Muestra por consola la generación del tipo de pokemo
    
    }
    else if (select === `2`){   //Si se selecciona la opción 2, se busca un pokemon

        const nombre = prompt("Escriba el nombre de un pokemon (en minúsculas): ");     //Pregunta al usuario el nombre del pokemon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);    //Realiza una solicitud HTTP GET a la API para obeter los datos del pokemon
        const data: Pokemon = await response.json();                                    //Analiza la respuesta como JSON y asigna los datos a la variable data
        console.log("Nombre:",data.name);                                               //Muestra por consola el nombre del pokemon                                    
        console.log("Id:",data.id);                                                     //Muestra por consola el id del pokemon                  
        console.log("Tipos:");                                                          //Muestra por consola los tipos del pokemon
        data.types.forEach((tipo: Types) => {                                           //Itero sobre el array de tipos y muestro por consola los datos de cada uno
            console.log("-> ", tipo.type.name);
        });
    }

    else {  
        // Si no se selecciona ninguna de las opciones anteriores, se muestra un mensaje de error
        console.log("Opción inválida");
    }
  }  
  // En caso de error, lo muestro por consola
  catch (error) {
    console.log("Error:", error);
  }
};

await searchPokemon();  //Llamada a la función
