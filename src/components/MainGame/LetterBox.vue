<template>
  <div
    class="h-12 w-12 border-solid border border-black bg-white"
    v-if="color === 0"
  >
    <p class="text-center uppercase text-4xl">{{ value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border border-black bg-slate-500"
    v-else-if="color === 1"
  >
    <p class="text-center uppercase text-4xl">{{ value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border border-black bg-yellow-300"
    v-else-if="color === 2"
  >
    <p class="text-center uppercase text-4xl">{{ value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border border-black bg-green-500"
    v-else-if="color === 3"
  >
    <p class="text-center uppercase text-4xl">{{ value }}</p>
  </div>
</template>

<script>
import { Colors } from "./MainGame.vue";
import { watch, ref } from "vue";

export default {
  name: "LetterBox",
  props: {
    value: String,
    color: Number,
  },
};
</script>
