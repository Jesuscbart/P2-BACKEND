//PRACTICA 2 - Arquitectura y programación de sistemas en internet
//Ejercicio 1
//Jesús Cuesta Bartolomé
/*
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
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data: ResponseData) => {
                console.log("Status:",data.statusCode);
                data.data.forEach((pokemon: Pokemon) => {
                    console.log(`Nombre: ${pokemon.name}`);
                });
            })
            .catch((error) => console.log(error));
    };

    printInfo(); 


}
else {  

    console.log("Opción inválida");
}
*/

import { prompt } from "https://deno.land/x/prompts/mod.ts";

interface PokemonType {
  name: string;
}

interface Pokemon {
  name: string;
  types: PokemonType[];
  id: number;
}

const printPokemonInfo = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data: Pokemon = await response.json();
    console.log(`Name: ${data.name}`);
    console.log(`Type(s): ${data.types.map((type) => type.name).join(", ")}`);
    console.log(`ID: ${data.id}`);
  } catch (error) {
    console.log("Error:", error);
  }
};

const main = async () => {
  const name = await prompt({ message: "Enter the name of a Pokémon (in lowercase):" });
  await printPokemonInfo(name);
};

main();