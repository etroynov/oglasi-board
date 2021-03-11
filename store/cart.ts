import type { MutationTree } from 'vuex'
import type { State, Product } from '../typings'

export const state = (): State<Product> => ({
  data: [],
})

export const mutations: MutationTree<State<Product>> = {
  add(state, product) {
    console.info(state, product)
    // state.data.push(product)
  },
  remove(state, id) {
    state.data = state.data.filter((product) => product.id !== id)
  },
}
