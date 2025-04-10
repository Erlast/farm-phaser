<script setup lang="ts">
import {ref, onMounted} from 'vue'
import AuthForm from "./components/AuthForm.vue"

const showAuthForm = ref(false)

onMounted(() => {
  window.addEventListener('show-auth-form', () => {
    showAuthForm.value = true
  })
})
</script>
<template>
  <div id="game-container"></div>
  <div id="ui-container">
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
#game-container {
  position: fixed;
  inset: 0;
  z-index: 1;
}
</style>
