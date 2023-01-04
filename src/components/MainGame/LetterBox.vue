<template>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-white"
    v-if="color === 0"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-slate-200"
    v-else-if="color === 1"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-yellow-300"
    v-else-if="color === 2"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-green-500"
    v-else-if="color === 3"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ value }}
    </p>
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
