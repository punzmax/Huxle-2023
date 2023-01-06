<template>
  <button
    @click="KeyPressed"
    v-if="color === 0"
    class="lg:h-16 lg:w-10 md:h-14 md:w-8 sm:h-12 sm:w-8 h-10 w-6 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
  >
    {{ value }}
  </button>
  <button
    v-else-if="color === 2"
    @click="KeyPressed"
    class="lg:h-16 lg:w-10 md:h-14 md:w-8 sm:h-12 sm:w-8 h-10 w-6 bg-yellow-300 hover:bg-yellow-200 rounded"
  >
    {{ value }}
  </button>
  <button
    v-else-if="color === 3"
    @click="KeyPressed"
    class="lg:h-16 lg:w-10 md:h-14 md:w-8 sm:h-12 sm:w-8 h-10 w-6 bg-green-500 hover:bg-green-300 rounded"
  >
    {{ value }}
  </button>
</template>

<script>
import { Colors } from "./MainGame.vue";

const Key = {
  props: {
    value: String,
    color: Number,
    callback: Function(),
  },
  setup(props, context) {
    function KeyPressed() {
      context.emit("pressed", props.value);
    }

    return { KeyPressed };
  },
};

export default Key;
</script>

<style scoped></style>
