import {useCharacterStore} from "@/stores/characterStore.ts"
import {useSeedsStore} from "@/stores/seedsStore.ts";
import {useQuestsStore} from "@/stores/questsStore.ts";
import {useAuthStore} from "@/stores/authStore.ts";

export default function clearStores(flushToken: boolean = false) {
  const characterStore = useCharacterStore()
  const seedsStore = useSeedsStore()
  const questsStore = useQuestsStore()
  
  characterStore.stopAutoUpdate()
  seedsStore.stopAutoUpdate()
  questsStore.stopAutoUpdate()
  if (flushToken) {
    const authStore = useAuthStore()
    authStore.clearToken()
  }
}
