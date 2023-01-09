<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore(); //initialize the store
const count = store.count; //get the count value
console.log(count); //prints 0
store.increment(2); //increment the count
</script>

<template>

  <router-view></router-view>
</template>
