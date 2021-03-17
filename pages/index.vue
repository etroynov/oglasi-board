<template>
  <div class="container">
    <header class="header">
      <h1>Каталог</h1>
    </header>

    <section class="content">
      <section class="col">
        <Spoiler
          v-for="category in categoriesWithProducts"
          :key="category.id"
          :title="category.name"
        >
          <Product
            v-for="{ id, name, quantity, price } in category.products"
            :key="id"
            :id="id"
            :name="name"
            :quantity="quantity"
            :price="price"
          />
        </Spoiler>
      </section>

      <section>
        <Cart />
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

import { useCategoriesWithProducts } from '../hooks'

import Cart from '../components/Cart.vue'
import Spoiler from '../components/Spoiler.vue'
import Product from '../components/Product.vue'

export default defineComponent({
  components: {
    Cart,
    Product,
    Spoiler,
  },
  setup() {
    const { categoriesWithProducts } = useCategoriesWithProducts();

    return {
      categoriesWithProducts
    }
  },
})
</script>

<style scoped>
.container {
  width: 1280px;
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  height: 80px;
  margin-bottom: 15px;
  border-bottom: 1px solid #bbb;
}

.content {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: max-content;
}

.col {
  padding-right: 20px;
  border-right: 1px solid #bbb;
}
</style>
