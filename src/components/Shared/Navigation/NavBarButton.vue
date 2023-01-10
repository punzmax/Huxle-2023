<template>
  <div>
    <router-link
      class="text-center m-1 p-2 bg-slate-400 block hover:text-stone-600 hover:bg-slate-200"
      :to="props.route"
      >{{ props.text }}</router-link
    >
  </div>
</template>

<script setup lang="ts">
interface Props {
  text: string;
  route: string;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  route: "",
});
</script>
