<template>
  <button
    @click="KeyPressed"
    class="h-14 w-20 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
  >
    {{ value }}
  </button>
</template>

<script>
const BigKey = {
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

export default BigKey;
</script>

<style scoped></style>
