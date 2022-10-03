<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div class="overlay">
    <div class="modal" v-if="show">
      <button @click="show = !show">Close</button>
      <slot  />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  display: flex;
  padding-top: 120px;
  justify-content: center;
  background: rgba(100, 100, 100, 30%);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.modal {
  position: absolute;
  min-height: 350px;
  min-width: 400px;
  background: white;
  color: black;
}
</style>
