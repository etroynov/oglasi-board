import type { MutationTree } from 'vuex'
import type { State, Product } from '../typings'

export const state = (): State<Product> => ({
  data: [],
})

export const mutations: MutationTree<State<Product>> = {
  fetch(state, data) {
    state.data = data
  },
}
