<template>
  <section v-if="!cart.length" class="empty">в корзине нет товаров</section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    cart() {
      return this.$store.state.cart.data
    },
  },
})
</script>

<style scoped>
.empty {
  text-align: center;
}
</style>
