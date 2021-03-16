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
import Vue from 'vue'
import Cart from '../components/Cart.vue'
import Spoiler from '../components/Spoiler.vue'
import Product from '../components/Product.vue'

export default Vue.extend({
  data(): {
    interval: NodeJS.Timeout
  } {
    return {
      interval: '' as any,
    }
  },
  methods: {
    start() {
      this.interval = setInterval(() => {
        this.$store.dispatch('fetch');
      }, 3 * 1000)
    },
    stop() {
      clearInterval(this.interval)
    },
  },
  components: {
    Cart,
    Product,
    Spoiler,
  },
  computed: {
    categoriesWithProducts() {
      const categories = this.$store.state.categories.data
      const products = this.$store.state.products.data

      return categories
        .map((category: any) => {
          const _products =
            products.filter((product: any) => {
              return product.categoryId === category.id
            }) ?? []

          return {
            ...category,
            products: _products,
          }
        })
        .filter((category: any) => category.products.length)
    },
  },
  async mounted() {
    this.$store.dispatch('fetch').then(this.start)
  },
  beforeDestroy() {
    this.stop()
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
