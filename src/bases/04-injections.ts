import axios from "axios";
import {
  HttpAdapter,
  PokeApiAdapterAxios,
  PokeApiAdapterFetch,
} from "../api/pokeApi.adapter";
import { IPokeapi, Move } from "../interface/pokeapi.interface";

export class Pokemon {
  get imageUrl(): string {
    return `https://pokemon.com/${this.id}.jpg`;
  }

  constructor(
    public readonly id: number,
    public name: string,
    // Todo: inyectar dependencias
    public http: HttpAdapter
  ) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`);
  }

  speak() {
    console.log(`${this.name}, ${this.name}`);
  }

  async getMoves(): Promise<Move[]> {
    const data = await this.http.get<IPokeapi>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );
    return data.moves;
  }
}

const pokeApiAxios = new PokeApiAdapterAxios();
const pokeApiFetch = new PokeApiAdapterFetch();

export const charmander = new Pokemon(4, "Charmander", pokeApiAxios);

charmander.getMoves();
