import { IPokemon } from "../interface/pokemon.interface";

export const pokemonIds = [1, 2, 3, 4, 5];

export const bulbasaur: IPokemon = {
  id: 1,
  name: "Bulbasaur",
};

export const charmander: IPokemon = {
    id: 1,
    name: "Charmander",
  };

export const pokemons: IPokemon[] = [];

pokemons.push(bulbasaur, charmander);

console.log('pokemons', pokemons)