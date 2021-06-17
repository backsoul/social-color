<template>
  <div class="flex justify-center items-center w-screen h-screen bg-primary">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout",
});
</script>
