<template>
  <h1 class="text-2xl text-center mb-5">{{ props.text }}</h1>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
});
</script>
