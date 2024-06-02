import { createMemoryHistory, createRouter } from 'vue-router'
import Pokedex from '@/views/Pokedex.vue'
import Party from '@/views/Party.vue'
import PokemonDetail from '@/views/PokemonDetail.vue'
import Trainer from '@/views/Trainer.vue'

const routes = [
  { name: 'Home', path: '/', component: Pokedex },
  { name: 'Pokedex', path: '/pokedex', component: Pokedex },
  { name: 'Party', path: '/party', component: Party },
  { name: 'Trainer', path: '/trainer', component: Trainer },
  { name: 'PokemonDetail', path: '/pokemon-detail/:pokemonName', component: PokemonDetail },
]

 const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router