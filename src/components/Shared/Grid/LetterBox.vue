<template>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-white"
    v-if="parseInt(props.color) === 0"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ props.value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-slate-200"
    v-else-if="parseInt(props.color) === 1"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ props.value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-yellow-300"
    v-else-if="parseInt(props.color) === 2"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ props.value }}
    </p>
  </div>
  <div
    class="lg:h-18 lg:w-18 md:h-16 md:w-16 sm:h-12 sm:w-12 h-10 w-10 flex items-center justify-center border-solid border border-black bg-green-500"
    v-else-if="parseInt(props.color) === 3"
  >
    <p
      class="align-middle uppercase lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold"
    >
      {{ props.value }}
    </p>
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
