import { computed, onMounted, onUnmounted } from '@nuxtjs/composition-api'
import { useState, useActions } from 'vuex-composition-helpers'

import { Category, Product } from '../typings'

export function useCategoriesWithProducts() {
  const { fetch } = useActions(['fetch'])
  let interval: number;

  onMounted(() => {
    fetch().then(() => {
      interval = setInterval(fetch, 3 * 1000)
    })
  })

  onUnmounted(() => {
    clearInterval(interval)
  })


  const { categories, products } = useState<{
      categories: {
        data: Category[]
      }
      products: {
        data: Product[]
      }
    }>(['categories', 'products'])

    const categoriesWithProducts = computed(() => {
      return categories.value.data
        .map((category: any) => {
          const _products =
            products.value.data.filter((product: any) => {
              return product.categoryId === category.id
            }) ?? []

          return {
            ...category,
            products: _products,
          }
        })
        .filter((category: any) => category.products.length)
    })

    return {
      categoriesWithProducts,
    }
}
