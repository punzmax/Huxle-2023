<template>
  <div class="grid grid-row-6 gap-0.5">
    <GridRow
      v-for="(item, index) in $props.GridArray"
      :values="item"
      :colors="ColorArray[index]"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script>
import GridRow from "./GridRow.vue";

export default {
  name: "HuxleGrid",
  components: { GridRow },
  props: {
    GridArray: String[[]],
    ColorArray: Number[[]],
  },
  setup() {},
};
</script>

<style scoped></style>
