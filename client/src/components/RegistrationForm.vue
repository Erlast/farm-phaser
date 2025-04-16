<script setup lang="ts">
import {useRouter} from "vue-router";
import {reactive, ref} from "vue";
import {helpers, required, sameAs} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import authService from "@/api/AuthService";

const router = useRouter();
const login = ref('')
const password = ref('')
const repeatPassword = ref('')
const $externalResults = ref<{ [key: string]: string[] }>({})

const initialState = {
  login: login,
  password: password,
  repeatPassword: repeatPassword,
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
  },
  repeatPassword: {
    required: helpers.withMessage(
        'Поле обязательно к заполнению',
        required
    ),
    sameAs: helpers.withMessage('Пароли не совпадают', sameAs(password)),
    $autoDirty: true
  }
}

const v$ = useVuelidate(rules, state, {$externalResults})

const registerHandler = async () => {
  try {
    v$.value.$touch()

    if (!v$.value.$invalid) {
      const credential: ICredentialModel = {
        username: login.value,
        password: password.value
      }
      await authService.register(credential)
      await router.push('/auth')


      // emit('login')
    }
  } catch (error: any) {
    console.error(error)
  }
}

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