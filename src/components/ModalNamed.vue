<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>  
  <div class="overlay">
    <div class="modal" v-if="show">
      <div class="header">
        <slot name="header" />
      </div>
      <hr/>
      <div class="content">
        <slot/>
      </div>
      <hr/>
      <div class="footer">
        <slot name="footer">
          <button @click="show = !show">Close</button>
        </slot>
      </div>
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
  display: flex;
  flex-direction: column;
}

.header {
  font-size: 1.25rem;
}

.content {
  flex-grow: 1;
}
</style>
