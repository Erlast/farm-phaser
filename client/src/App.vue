<script setup lang="ts">
</script>
<template>
<!--  <div id="game-container"></div>-->
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
