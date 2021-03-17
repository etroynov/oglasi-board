<template>
  <div>
    <table
      border="1"
      width="100%"
      bordercolor="#aaa"
      cellpadding="12"
      cellspacing="0"
    >
      <thead>
        <tr>
          <td colspan="4" class="center">Корзина</td>
        </tr>

        <tr v-if="items.length" class="center">
          <td>Наименование и описание товара</td>
          <td>Количество</td>
          <td colspan="2">Цена</td>
        </tr>
      </thead>

      <tbody>
        <CartProduct
          v-for="{ id, name, quantity, count, price } in items"
          :key="id"
          :id="id"
          :name="name"
          :quantity="quantity"
          :price="price"
          :count="count"
        />

        <tr>
          <td v-if="!items.length" class="center" colspan="4">
            в корзине нет товаров
          </td>
        </tr>
      </tbody>

      <tfoot v-if="items.length">
        <tr>
          <td colspan="2">Общая стоимость</td>
          <td class="center" colspan="2">{{ totalPrice }} руб</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { createNamespacedHelpers } from 'vuex-composition-helpers'

const { useState } = createNamespacedHelpers('cart')

import CartProduct from '../components/CartProduct.vue'

import type { CartProductType } from '../typings'

export default defineComponent({
  components: {
    CartProduct,
  },
  setup() {
    const { data: items } = useState(['data'])

    const totalPrice = computed(() =>
      items.value.reduce((acc: number, product: CartProductType) => {
        acc += product.price * product.count

        return acc
      }, 0)
    )

    return {
      items,
      totalPrice
    }
  },
})
</script>

<style scoped>
.center {
  text-align: center;
}
</style>
