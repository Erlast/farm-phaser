<script setup lang="ts">
import {onMounted, onUnmounted} from "vue";
import {useCharacterStore} from "./stores/characterStore.ts"
import {useSeedsStore} from "./stores/seedsStore.ts";
import {useQuestsStore} from "./stores/questsStore.ts";

const characterStore = useCharacterStore()
const seedsStore = useSeedsStore()
const questsStore = useQuestsStore()

onMounted(async () => {
  await characterStore.startAutoUpdate(5000)
  await seedsStore.startAutoUpdate(50000)
  // await questsStore.startAutoUpdate(5000)
})

onUnmounted(() => {
  characterStore.stopAutoUpdate()
  seedsStore.stopAutoUpdate()
  questsStore.stopAutoUpdate()
})
</script>
<template>
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
