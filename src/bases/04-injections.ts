import axios from "axios";
import { PokeApiAdapter } from "../api/pokeApi.adapter";
import { IPokeapi, Move } from "../interface/pokeapi.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    public http: PokeApiAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = this.http.get("https://pokeapi.co/api/v2/pokemon/4");
    return data;
  }
}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon(4, "Charmander", pokeApi);

charmander.getMoves();
