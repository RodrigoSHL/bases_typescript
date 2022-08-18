// import { age, name } from "./bases/01-types";
// import { bulbasaur, pokemonIds } from "./bases/02-objects";
// import { charmander } from "./bases/04-injections";
import { charmander } from "./bases/05-decorators";
import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div>
    <h2>Hello ${charmander.name}</h2>

    <a href="https://vitejs.dev" target="_blank">Documentation</a>
  </div>
`;
