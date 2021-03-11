import type { MutationTree } from 'vuex'
import type { State, Category } from '../typings'

export const state = (): State<Category> => ({
  data: [],
})

export const mutations: MutationTree<State<Category>> = {
  fetch(state, data) {
    state.data = data
  },
}
