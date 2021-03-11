<template>
  <section class="row">
    <div>{{ name }}</div>
    <div class="center">{{ quantity }}</div>
    <div class="center">{{ price }}</div>
    <div class="center">
      <button class="button" @click="add(id)">в корзину</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    id: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
      default: '',
    },
    quantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    add(id: number) {
      this.$store.commit('cart/add', id)
    },
  },
})
</script>

<style scoped>
.row {
  display: grid;
  grid-template-columns: 1fr repeat(3, 80px);
  grid-auto-flow: column;
  min-height: 60px;
  justify-content: center;
  align-items: center;
}

.center {
  justify-self: center;
}

.button {
  padding: 6px 8px;
  background-color: #eee;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.8s ease;
  outline: none;
}

.button:hover {
  background-color: #bbb;
}

.button:active {
  background-color: #ddd;
}
</style>
