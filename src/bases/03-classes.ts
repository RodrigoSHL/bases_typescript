import axios from "axios";
import { IPokeapi, Move } from "../interface/pokeapi.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://www.pokemon.com/${this.id}.jpg`;
  }
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}`, `${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const {data} = await axios.get<IPokeapi>("https://pokeapi.co/api/v2/pokemon/4");
    console.log("res", data.moves);
    return data.moves;
  }
}

export const charmander = new Pokemon(4, "Charmander");

console.log("charmander", charmander.imageUrl);

// charmander.scream();
// charmander.speak();

console.log(charmander.getMoves());
