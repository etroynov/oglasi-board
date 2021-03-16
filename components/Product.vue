<template>
  <section class="row" :class="status">
    <div>{{ name }}</div>
    <div class="center">{{ quantity }}</div>
    <div class="center">{{ price | currency }}</div>
    <div class="center">
      <button class="button" @click="add(id)">в корзину</button>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'

export default Vue.extend({
  filters: {
    currency: (value: number) => value.toFixed(2)
  },
  data() {
    return {
      status: ''
    }
  },
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
    ...mapActions({
      add: 'cart/add',
    }),
  },
  watch: {
    price: function(prev: number, curr: number) {
      if (curr > prev) {
        this.status = 'up'
      } else {
        this.status = 'down'
      }
    }
  }
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

.up {
  color: green;
}

.down {
  color: red;
}
</style>
