<template>
  <h1>Create new game</h1>

  <div @click="() => onSelectedWord(0)">
    <p>English</p>
    <grid-row :values="wordLang1" :colors="'00000'"></grid-row>
  </div>

  <div @click="() => onSelectedWord(1)">
    <p>German</p>
    <grid-row :values="wordLang2" :colors="'00000'"></grid-row>
  </div>

  <button-default @button-pressed="onCreateButtonPressed" :text="'Create Game!'"
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
import { ref } from "vue";

import ButtonDefault from "@/components/Shared/FormElements/DefaultButton.vue";
import GridRow from "@/components/Shared/Grid/GridRow.vue";
import KeyBoard from "@/components/Shared/Keyboard/KeyBoard.vue";

import { WordHelper } from "@/helpers/WordHelper";

const selectedWordIndex = ref(0);
const wordLang1 = ref<Array<string>>([" ", " ", " ", " ", " "]);
const wordLang2 = ref<Array<string>>([" ", " ", " ", " ", " "]);

const onSelectedWord = (index: number) => {
  selectedWordIndex.value = index;
};

const onCreateButtonPressed = () => {
  // Open modal with generated hash
};

const onKeyPressed = (value: string) => {
  let word = getSelectedWord();
  word.value = WordHelper.addLetter(word.value, value);
};

const onEnterPressed = () => {
  selectedWordIndex.value = selectedWordIndex.value === 0 ? 1 : 0;
};

const onBackspacePressed = () => {
  let word = getSelectedWord();
  word.value = WordHelper.removeLetter(word.value);
};

const getSelectedWord = () => {
  return selectedWordIndex.value === 0 ? wordLang1 : wordLang2;
};
</script>
