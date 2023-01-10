<template>
  <div class="flex h-screen">
    <div class="ml-auto mr-auto">
      <div class="flex flex-col items-center">
        <nav-bar></nav-bar>

        <main-title :text="'Create new game!'"></main-title>

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
          @button-pressed="showModal = true"
          :text="'Create Game!'"
          :disabled="createButtonDisabled"
          >Create Game!</button-default
        >
        <modal name="language-modal" v-if="showModal" class="fixed flex items-center justify-center">
        <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-6">
          <p class="bg-purple-300 px-10 py-5">Link to share your game:</p>
          <div class="bg-purple-300 py-5 px-5">
            <button @click="onCreateButtonPressed" class="hover:bg-purple-800 active:bg-purple-800 focus:bg-purple-800">Copy the link to share!</button>
            </div>

        </div>

      </modal>
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

import MainTitle from "@/components/Shared/TitleBlocks/MainTitle.vue";
import NavBar from "@/components/Shared/Navigation/NavBar.vue";
import ButtonDefault from "@/components/Shared/FormElements/DefaultButton.vue";
import GridRow from "@/components/Shared/Grid/GridRow.vue";
import KeyBoard from "@/components/Shared/Keyboard/KeyBoard.vue";

import { WordHelper } from "@/helpers/WordHelper";



const selectedWordIndex = ref(0);
const wordLang1 = ref<Array<string>>([" ", " ", " ", " ", " "]);
const wordLang2 = ref<Array<string>>([" ", " ", " ", " ", " "]);
const createButtonDisabled = ref(true);
const showModal = ref(false);

const onSelectedWord = (index: number) => {
  selectedWordIndex.value = index;
};

function generateEncodedHashLink(string: string) {
  const encodedData = window.btoa(string);

  // Generate the hash link
  const link = `${encodedData}`;

  return link;
}
const onCreateButtonPressed = async (): Promise<string> => {
  // Open modal with generated hash
  const encodedurl = generateEncodedHashLink(
    wordLang1.value.join("") + "," + wordLang2.value.join("")
  );
  const finalLink = "Click the link to play my Huxle game! 🙈 \n"+
  "http://"+location.hostname+":"+location.port+"/" + encodedurl;
  console.log(finalLink);
  try {
    await navigator.clipboard.writeText(finalLink);
    alert('Link copied to clipboard');
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
  return finalLink;
};
const onKeyPressed = (value: string) => {
  let word = getSelectedWord();
  word.value = WordHelper.addLetter(word.value, value);
  updateCreateGameButton();
};

const onEnterPressed = () => {
  selectedWordIndex.value = selectedWordIndex.value === 0 ? 1 : 0;
  updateCreateGameButton();
};

const onBackspacePressed = () => {
  let word = getSelectedWord();
  word.value = WordHelper.removeLetter(word.value);
  updateCreateGameButton();
};

const getSelectedWord = () => {
  return selectedWordIndex.value === 0 ? wordLang1 : wordLang2;
};

const updateCreateGameButton = () => {
  createButtonDisabled.value =
    wordLang1.value.includes(" ") || wordLang2.value.includes(" ");
};

</script>
