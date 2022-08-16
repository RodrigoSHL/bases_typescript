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
}

export const charmander = new Pokemon(4, "Charmander");

console.log("charmander", charmander.imageUrl);


charmander.scream()
charmander.speak()