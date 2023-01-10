<template>
  <button
    @click="onButtonPressed"
    :disabled="props.disabled"
    class="p-2 bg-slate-400 rounded hover:text-stone-600 hover:bg-slate-200 disabled:bg-slate-200"
  >
    {{ props.text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  disabled: false,
});

const emit = defineEmits<{
  (event: "button-pressed"): void;
}>();

const onButtonPressed = () => {
  emit("button-pressed");
};
</script>
