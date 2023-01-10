<template>
  <button
    @click="onKeyPressed"
    v-if="props.color === 0"
    class="lg:h-16 md:h-14 sm:h-12 h-10 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
  >
    {{ value }}
  </button>
  <button
    v-else-if="props.color === 2"
    @click="onKeyPressed"
    class="lg:h-16 md:h-14 sm:h-12 h-10 bg-yellow-300 hover:bg-yellow-200 rounded"
  >
    {{ value }}
  </button>
  <button
    v-else-if="props.color === 3"
    @click="onKeyPressed"
    class="lg:h-16 md:h-14 sm:h-12 h-10 bg-green-500 hover:bg-green-300 rounded"
  >
    {{ props.value }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  value: string;
  color: number;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
  color: 0,
});

const emit = defineEmits<{
  (event: "key-pressed", value: string): void;
}>();

const onKeyPressed = () => {
  emit("key-pressed", props.value);
};
</script>
