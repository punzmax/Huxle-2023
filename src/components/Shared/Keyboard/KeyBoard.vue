<template>
  <div class="flex grid grid-row-6 gap-1">
    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in QWERTZKeyBoard[0]"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in QWERTZKeyBoard[1]"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <Key value="Ent" class="w-16" @key-pressed="onEnterPressed"></Key>
      <Key
        v-for="(item, index) in QWERTZKeyBoard[2]"
        :value="item"
        :index="index"
        :key="index"
        @key-pressed="onKeyPressed"
      />
      <Key value="Back" class="w-16" @key-pressed="onBackspacePressed"></Key>
    </div>
  </div>
</template>

<script setup lang="ts">
import Key from "@/components/Shared/Keyboard/KeyBoardKey.vue";

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
