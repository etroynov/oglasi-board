import type { ActionTree } from 'vuex'
import type { RootState } from '../typings'

import {
  getCategories,
  getProducts,
  getProductsMetaObjToHash,
  getProductsWithMeta,
} from '../utils'

export const actions: ActionTree<void, RootState> = {
  async fetch({ commit }) {
    const [{ data: meta }, { data: groups }] = await Promise.all([
      this.$axios.get('/meta.json'),
      this.$axios.get('/groups.json'),
    ])
    const rate = Math.floor(Math.random() * (80 - 20 + 1)) + 20

    const categories = getCategories(groups)
    const products = getProducts(groups)
    const metaHash = getProductsMetaObjToHash(meta, rate)

    const productsWithMeta = getProductsWithMeta(products, metaHash)

    commit('categories/fetch', categories)
    commit('products/fetch', productsWithMeta)
  },
}
