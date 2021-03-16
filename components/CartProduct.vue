<template>
<tr>
  <td width="300">{{ name }}</td>
  <td width="50">
    <input v-model="_count" />
    <p class="error" v-show="_count >= quantity">Количество ограничено</p>
  </td>
  <td>{{ price | currency }} <strong>руб</strong>/шт</td>
  <td><button @click="remove(id)">удалить</button></td>
</tr>
</template>

<script lang="ts">
import Vue from 'vue'

import { mapMutations } from 'vuex'

export default Vue.extend({
  filters: {
    currency: (value: number) => value.toFixed(2)
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
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    _count: {
      get() {
        return (this as any).$props.count
      },
      set(value) {
        (this as any).update({
          ...(this as any).$props,
          count: Number(value)
        })
      }
    },
  },
  methods: {
    ...mapMutations({
      remove: 'cart/remove',
      update: 'cart/update'
    }),
  },
})
</script>

<style scoped>
.error {
  padding: 12px;
  color: red;
  text-align: center;
}
</style>
