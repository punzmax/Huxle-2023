<template>
  <button
    @click="onKeyPressed"
    class="h-14 w-8 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200"
  >
    {{ props.value }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  value: string;
}

const props = withDefaults(defineProps<Props>(), {
  value: "",
});

const emit = defineEmits<{
  (event: "key-pressed", value: string): void;
}>();

const onKeyPressed = () => {
  emit("key-pressed", props.value);
};
</script>
