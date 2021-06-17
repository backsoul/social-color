<template>
  <div
    class="
      static
      flex
      justify-center
      items-center
      hover:shadow-2xl
      w-80
      p-5
      bg-white
      rounded-xl
    "
  >
    <div class="w-full h-full flex flex-col justify-center items-center">
      <h1 class="text-dark text-2xl font-semibold">Registro</h1>
      <form action="POST" class="grid col-2 gap-5 mt-5">
        <div class="flex justify-between">
          <label class="font-bold text-dark_ligth">Ingresa un color:</label>
          <input type="color" v-model="color" />
        </div>
        <input
          type="email"
          class="p-4 rounded outline-none font-bold text-center"
          placeholder="Ingresa tu email"
          v-model="email"
          required
        />
        <input
          type="password"
          class="p-4 rounded outline-none font-bold text-center"
          placeholder="Ingresa tu password"
          v-model="password"
          required
        />
        <button
          type="submit"
          class="
            bg-primary
            text-white
            p-4
            rounded-2xl
            font-bold
            outline-none
            hover:shadow-xl
            focus:outline-none
          "
        >
          Ingresar
        </button>
      </form>
      <button
        @click="$router.push('login')"
        class="text-primary font-bold p-3 focus:outline-none"
      >
        inicia sesión
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface User {
  email: string;
  password: string | number;
  color: string;
}
export default defineComponent({
  name: "Register",
  data() {
    const user = {} as User;
    let { email, password, color } = user;
    color = "#00FF00";
    return {
      email,
      password,
      color,
    };
  },
});
</script>
