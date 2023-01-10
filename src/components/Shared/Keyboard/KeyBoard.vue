<template>
  <div class="flex grid grid-row-6 gap-1">
    <div class="flex gap-1 justify-self-center">
      <key-board-key
        v-for="(item, index) in QWERTZKeyBoard[0]"
        class="lg:w-10 md:w-8 sm:w-8 w-6"
        :color="0"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <key-board-key
        v-for="(item, index) in QWERTZKeyBoard[1]"
        class="lg:w-10 md:w-8 sm:w-8 w-6"
        :color="0"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <key-board-key
        value="Ent"
        class="lg:w-22 md:w-18 sm:w-16 w-10"
        @key-pressed="onEnterPressed"
      ></key-board-key>
      <key-board-key
        v-for="(item, index) in QWERTZKeyBoard[2]"
        class="lg:w-10 md:w-8 sm:w-8 w-6"
        :color="0"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
      <key-board-key
        value="Back"
        class="lg:w-22 md:w-18 sm:w-16 w-10"
        @key-pressed="onBackspacePressed"
      ></key-board-key>
    </div>
  </div>
</template>

<script setup lang="ts">
import KeyBoardKey from "@/components/Shared/Keyboard/KeyBoardKey.vue";

const QWERTZKeyBoard = [
  ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
  ["Y", "X", "C", "V", "B", "N", "M"],
];

const emit = defineEmits<{
  (event: "key-pressed", value: string): void;
  (event: "enter-pressed"): void;
  (event: "backspace-pressed"): void;
}>();

const onKeyPressed = (value: string) => {
  emit("key-pressed", value);
};

const onEnterPressed = () => {
  emit("enter-pressed");
};

const onBackspacePressed = () => {
  emit("backspace-pressed");
};
</script>
