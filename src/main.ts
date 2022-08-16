import { age, name } from "./bases/01-types";
import { pokemon, pokemonIds } from "./bases/02-objects";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div>
    <h1>Hello ${name}, ${age}</h1>
    <h2>Hello ${pokemon.name}</h2>
    <a href="https://vitejs.dev" target="_blank">Documentation</a>
  </div>
`;
