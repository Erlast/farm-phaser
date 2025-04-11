<script setup lang="ts">
import {ref, reactive} from 'vue'
import {useRouter} from 'vue-router'
import {useVuelidate} from '@vuelidate/core'
import {required, helpers} from '@vuelidate/validators'
import authService from "@/api/AuthService.ts";

const login = ref('')
const password = ref('')
const router = useRouter()
const $externalResults = ref<{ [key: string]: string[] }>({})

const initialState = {
  login: login,
  password: password
}

const state = reactive({
  ...initialState
})

const rules = {
  login: {
    required: helpers.withMessage(
        'Поле обязательно к заполнению',
        required
    ),
    $autoDirty: true
  },
  password: {
    required: helpers.withMessage(
        'Поле обязательно к заполнению',
        required
    ),
    $autoDirty: true
  }
}

const v$ = useVuelidate(rules, state, {$externalResults})

const onLogin = async () => {
  try {
    v$.value.$touch()

    if (!v$.value.$invalid) {
      const credential: ICredentialModel = {
        username: login.value,
        password: password.value
      }
      await authService.login(credential)

      phaserGame.scene.stop('AuthScene')
      phaserGame.scene.start('MainScene')

    }
  } catch (error: any) {
    console.error(error)
  }

}

const onRegister = async () => {
  await router.push('/register') // Или emit события для Phaser
}
</script>

<template>
  <div class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div class="bg-gray-800 p-6 rounded-xl shadow-lg w-[300px] flex flex-col gap-4">
      <div class="flex flex-col w-full">
        <input
            v-model="login"
            type="text"
            placeholder="Логин"
            class="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            :class="{'border-red-50':v$.login.$errors.length}"
        />
        <span v-if="v$.login.$errors.length">{{ v$.login.$errors[0] }}</span>
      </div>
      <div class="flex flex-col w-full">
        <input
            v-model="password"
            type="password"
            placeholder="Пароль"
            class="p-2 rounded bg-gray-700 text-white placeholder-gray-400"
            :class="{'border-red-50':v$.password.$errors.length}"
        />
        <span v-if="v$.password.$errors.length">{{ v$.password.$errors[0] }}</span>
      </div>
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