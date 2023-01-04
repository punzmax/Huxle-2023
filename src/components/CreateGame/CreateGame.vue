<template>
  <h1>Create new game</h1>
  <p>English</p>
  <grid-row :values="wordLang1" :colors="'00000'"></grid-row>
  <p>German</p>
  <grid-row :values="wordLang2" :colors="'00000'"></grid-row>
  <button-default @button-pressed="onButtonPressed" :text="'Create Game!'"
    >Create Game!</button-default
  >
  <key-board
    class="place-content-center"
    @keyPressed="onKeyPressed"
    @backspacePressed="onBackspacePressed"
    @enterPressed="onEnterPressed"
  ></key-board>
</template>

<script setup lang="ts">
import ButtonDefault from "@/components/Shared/FormElements/DefaultButton.vue";
import GridRow from "@/components/Shared/Grid/GridRow.vue";
import KeyBoard from "@/components/Shared/Keyboard/KeyBoard.vue";
import { ref } from "vue";

const wordLang1 = ref<Array<string>>([" ", " ", " ", " ", " "]);
const wordLang2 = ref<Array<string>>([" ", " ", " ", " ", " "]);

const onButtonPressed = () => {
  // Open modal with generated hash

  console.log("Create button pressed");
};

const onKeyPressed = (value: string) => {
  console.log("Key pressed: " + value);
};

const onEnterPressed = () => {
  console.log("Enter key pressed");
};

const onBackspacePressed = () => {
  console.log("Backspace key pressed");
};
</script>
