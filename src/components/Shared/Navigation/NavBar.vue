<template>
  <div class="flex w-full mb-5">
    <nav-bar-button class="w-6/12" :text="'Play'" :route="'/'"></nav-bar-button>
    <nav-bar-button class="w-6/12" :text="'Create'" :route="'/create'"></nav-bar-button>
  </div>
</template>

<script setup lang="ts">
import NavBarButton from "@/components/Shared/Navigation/NavBarButton.vue";
</script>
