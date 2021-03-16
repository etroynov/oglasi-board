import type { MutationTree, ActionTree } from 'vuex'
import type { RootState, State, CartProductType } from '../typings'

export const state = (): State<CartProductType> => ({
  data: [],
})

export const mutations: MutationTree<State<CartProductType>> = {
  add(state, product) {
    state.data.push(product)
  },
  update(state, product) {
    const products = state.data.filter(({ id }) => product.id !== id)

    state.data = [...products, product]
  },
  remove(state, id) {
    state.data = state.data.filter((product) => product.id !== id)
  },
}

export const actions: ActionTree<State<CartProductType>, RootState> = {
  add({ state, commit, rootState }, id: number) {
    const { products } = rootState

    const product = products.data.find((product) => product.id === id)
    const existingProduct = state.data.find((product) => product.id === id)

    if (existingProduct) {
      const newProduct = {
        ...product,
        count: existingProduct.count + 1,
      }

      commit('update', newProduct)
    } else {
      commit('add', {
        ...product,
        count: 1,
      })
    }
  },
}
