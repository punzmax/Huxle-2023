<template>
  <button
    @click="KeyPressed"
    class="h-14 w-8 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
  >
    {{ value }}
  </button>
</template>

<script>
const Key = {
  props: {
    value: String,
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
