<template>
  <div
    class="h-12 w-12 border-solid border-2 border-black bg-white"
    v-if="parseInt(props.color) === 0"
  >
    <p class="text-center uppercase text-4xl">{{ props.value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border-2 border-black bg-green-500"
    v-else-if="parseInt(props.color) === 3"
  >
    <p class="text-center uppercase text-4xl">{{ props.value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border-2 border-black bg-yellow-500"
    v-else-if="parseInt(props.color) === 2"
  >
    <p class="text-center uppercase text-4xl">{{ props.value }}</p>
  </div>
  <div
    class="h-12 w-12 border-solid border-2 border-black bg-red-500"
    v-else-if="parseInt(props.color) === 1"
  >
    <p class="text-center uppercase text-4xl">{{ props.value }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: string;
  color: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  color: "",
});
</script>
