import { age, name } from "./bases/01-types";
import { bulbasaur, pokemonIds } from "./bases/02-objects";
import { charmander } from "./bases/04-injections";

import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div>
    <h2>01 ${name}, ${age}</h2>
    <h2>Hello ${bulbasaur.name}</h2>
    <h2>Hello ${charmander.name}</h2>

    <a href="https://vitejs.dev" target="_blank">Documentation</a>
  </div>
`;
