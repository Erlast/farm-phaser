<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
const backToLoginHandler = () => {
  router.push("/auth");
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-[300px] flex flex-col gap-4">
      <input
          v-model="login"
          type="text"
          placeholder="Логин"
          class="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
      <input
          v-model="password"
          type="password"
          placeholder="Пароль"
          class="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
      <input
          v-model="repeatPassword"
          type="password"
          placeholder="Повтор пароля"
          class="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
      />
      <button
          @click="registerHandler"
          class="bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
      >
        Зарегистрироваться
      </button>
      <button
          @click="backToLoginHandler"
          class="text-sm text-gray-400 hover:underline"
      >
        Назад к авторизации
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>