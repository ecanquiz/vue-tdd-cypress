<script setup>
  import Stepper from './Stepper.vue'
  import { ref } from 'vue'
  
  const initial = ref(0)
</script>

<template>
  <div>
    What's your age?
    <Stepper @change="onAgeChange" :initial='initial'/>
    <!-- onAgeChange is a method the parent component defines -->
  </div>
</template>
