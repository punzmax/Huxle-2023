<template>
  <button
    @click="KeyPressed"
    class="lg:h-16 lg:w-22 md:h-14 md:w-18 sm:h-12 sm:w-16 h-10 w-10 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
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
