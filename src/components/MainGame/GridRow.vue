<template>
  <div class="flex gap-0.5 justify-start">
    <LetterBox
      v-for="(item, index) in values"
      :value="item"
      :color="colors[index]"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script>
import LetterBox from "./LetterBox.vue";

export default {
  name: "GridRow",
  props: {
    values: String[5],
    colors: Number[5],
  },
  components: { LetterBox },
};
</script>

<style scoped></style>
