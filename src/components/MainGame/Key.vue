<template>
  <button
    v-if="color === 1"
    disabled="true"
    class="h-14 w-8 bg-slate-500 rounded"
  >
    {{ value }}
  </button>
  <button
    v-else-if="color === 2"
    @click="KeyPressed"
    class="h-14 w-8 bg-yellow-300 hover:bg-yellow-200 rounded"
  >
    {{ value }}
  </button>
  <button
    v-else-if="color === 3"
    @click="KeyPressed"
    class="h-14 w-8 bg-green-500 hover:bg-green-300 rounded"
  >
    {{ value }}
  </button>
  <button
    @click="KeyPressed"
    v-else
    class="h-14 w-8 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
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
