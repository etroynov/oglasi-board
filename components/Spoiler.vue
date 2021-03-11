<template>
  <div>
    <section class="spoiler">
      <header class="header">
        <h3 class="title">{{ title }}</h3>
        <button class="toggle" @click="toggle()">
          <span v-if="open">-</span>
          <span v-else>+</span>
        </button>
      </header>

      <main v-show="open" class="main">
        <slot></slot>
      </main>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      open: true,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
})
</script>

<style scoped>
.spoiler {
  margin-bottom: 20px;
  border: 1px solid #bbb;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 0 20px;
  background-color: #eee;
}

.title {
  font-size: 18px;
  font-weight: normal;
  text-transform: uppercase;
}

.toggle {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border: 1px solid #aaa;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
}

.main {
  display: grid;
  gap: 20px;
  padding: 20px;
}
</style>
