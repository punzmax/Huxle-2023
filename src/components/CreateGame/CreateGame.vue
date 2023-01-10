<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <div class="flex flex-col items-center">
        <h1 class="mb-5">Create new game</h1>

        <div
          @click="() => onSelectedWord(0)"
          class="mb-5 p-5 rounded"
          :class="{ 'bg-gray-400': selectedWordIndex === 0 }"
        >
          <p>English</p>
          <grid-row :values="wordLang1" :colors="'00000'"></grid-row>
        </div>

        <div
          @click="() => onSelectedWord(1)"
          class="mb-5 p-5 rounded"
          :class="{ 'bg-gray-400': selectedWordIndex === 1 }"
        >
          <p>German</p>
          <grid-row :values="wordLang2" :colors="'00000'"></grid-row>
        </div>

        <button-default
          class="mb-5"
          @button-pressed="onCreateButtonPressed"
          :text="'Create Game!'"
          >Create Game!</button-default
        >
      </div>
      
      <key-board
        class="place-content-center"
        @keyPressed="onKeyPressed"
        @backspacePressed="onBackspacePressed"
        @enterPressed="onEnterPressed"
      ></key-board>
    </div>
    
  </div>
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
function generateEncodedHashLink(string: string ) {
  const encodedData = window.btoa(string);

// Generate the hash link
const link = `${encodedData}`;

return link;
}



const onCreateButtonPressed = () => {
  // Open modal with generated hash
  const encodedurl=generateEncodedHashLink(wordLang1.value.join('') +','+ wordLang2.value.join(''));
  console.log(encodedurl);
  
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
