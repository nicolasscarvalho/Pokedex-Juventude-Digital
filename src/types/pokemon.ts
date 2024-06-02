export class Pokemon {
    constructor(
        public pokemonImg: string,
        public pokemonName: string,
        public pokemonType: string[],
        public pokemonHeight: number,
        public pokemonWeight: number, 
        public pokemonHP: number,
        public pokemonAttack: number, 
        public pokemonDefense: number,
        public pokemonSpeed: number
    ){}
}