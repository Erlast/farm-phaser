<script setup lang="ts">
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const login = ref('')
const password = ref('')
const router = useRouter()

const onLogin = async () => {
  // await api.login(login, password)

  // останавливаем Vue UI и запускаем MainScene Phaser
  // await router.push('/auth') // для простоты оставим тут
  phaserGame.scene.stop('AuthScene')
  phaserGame.scene.start('MainScene')

}

const onRegister = async () => {
  await router.push('/register') // Или emit события для Phaser
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
      <button
          @click="onLogin"
          class="bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
      >
        Войти
      </button>
      <button
          @click="onRegister"
          type="submit"
          class="text-sm text-gray-400 hover:underline cursor-pointer"
      >
        Регистрация
      </button>
    </div>
  </div>
</template>

<style scoped>
.auth-form {
  background-color: bisque;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 16px;
  transform: translate(-50%, -50%);
}

.register-btn {
  background: transparent;
  color: #ccc;
}
</style>