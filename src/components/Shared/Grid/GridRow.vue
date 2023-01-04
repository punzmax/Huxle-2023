<template>
  <div class="flex gap-0.5 justify-start">
    <LetterBox
      v-for="(item, index) in values"
      :value="item"
      :color="props.colors[index]"
      :index="index"
      :key="item.id"
    />
  </div>
</template>

<script setup lang="ts">
import LetterBox from "@/components/Shared/Grid/LetterBox.vue";

interface Props {
  values: Array<any>[5];
  colors: Array<any>[5];
}

const props = withDefaults(defineProps<Props>(), {
  values: "",
  colors: "",
});
</script>
