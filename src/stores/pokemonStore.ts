import { Pokemon } from '@/types/pokemon'
import { defineStore } from 'pinia'
import {ref} from "vue"
import axios from 'axios';


export const usePokemonData = defineStore('pokemonData', {

  state: () => {
    return {
      pokemonData: ref<Pokemon[]>([])
    }
  },

  actions: {

    updatePokemonData(){
        console.log('asdad')
        axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {

          const pokemonURLs = response["data"]["results"].map(value => value["url"])

          pokemonURLs.forEach((pokemonURL: string) => {
            axios
            .get(pokemonURL)
            .then(pokemonData => {
              this.pokemonData.push(new Pokemon(
                pokemonData["data"]["sprites"]["front_default"],
                pokemonData["data"]["name"],
                pokemonData["data"]["types"].map(typeObj => typeObj["type"]["name"]),
                pokemonData["data"]["weight"],
                pokemonData["data"]["height"],
                pokemonData["data"]["stats"][0]["base_stat"],
                pokemonData["data"]["stats"][1]["base_stat"],
                pokemonData["data"]["stats"][2]["base_stat"],
                pokemonData["data"]["stats"][5]["base_stat"]
              ))
            })
          });

        })
    }

  }

})


export const useActualPokemon = defineStore('actualPokemon', {

  state: () => {
    return {
      actualPokemon: ref<Pokemon>()
    }
  },

  actions: {
    
    updateActualPokemon(pokemonName: string) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(pokemonData => {
            this.actualPokemon = new Pokemon(
              pokemonData["data"]["sprites"]["front_default"],
              pokemonData["data"]["name"],
              pokemonData["data"]["types"].map(typeObj => typeObj["type"]["name"]),
              pokemonData["data"]["weight"],
              pokemonData["data"]["height"],
              pokemonData["data"]["stats"][0]["base_stat"],
              pokemonData["data"]["stats"][1]["base_stat"],
              pokemonData["data"]["stats"][2]["base_stat"],
              pokemonData["data"]["stats"][5]["base_stat"]
            )
        })
    }

  }
})


export const usePokedex = defineStore('pokedex', {

  state: () => {
    return {
      pokedex: ref({})
    }
  },

  actions: {
    addPokemon(){
      const actualPokemon = useActualPokemon()
      this.pokedex[actualPokemon.actualPokemon?.pokemonName] = actualPokemon.actualPokemon
    },

    removePokemon(){
      const actualPokemon = useActualPokemon()
      delete this.pokedex[actualPokemon.actualPokemon?.pokemonName]
    },

    getPokedex() {
      return Object.keys(this.pokedex).map(pokemonName => {
        const pokemonData: Pokemon = this.pokedex[pokemonName]
        return pokemonData
      })
    }
  }

})