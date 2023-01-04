<template>
  <div class="flex grid grid-row-6 gap-1">
    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in KeyboardLayout[0]"
        :color="ColorLayout[0][index]"
        :value="item"
        :index="index"
        :key="item.id"
        @pressed="KeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in KeyboardLayout[1]"
        :color="ColorLayout[1][index]"
        :value="item"
        :index="index"
        :key="item.id"
        @pressed="KeyPressed"
      />
    </div>
    <div class="flex gap-1 justify-self-center">
      <BigKey value="Ent" @pressed="Enter"></BigKey>
      <Key
        v-for="(item, index) in KeyboardLayout[2]"
        :color="ColorLayout[2][index]"
        :value="item"
        :index="index"
        :key="item.id"
        @pressed="KeyPressed"
      />
      <BigKey value="Back" @pressed="Back"></BigKey>
    </div>
  </div>
</template>

<script>
import Key from "./Key.vue";
import BigKey from "./BigKey.vue";
import { ref, defineExpose } from "vue";
import { Colors } from "./MainGame.vue";

export default {
  name: "KeyBoard",
  props: {
    callback: Function,
  },
  components: { Key, BigKey },
  setup(props, context) {
    const QWERTZKeyBoard = [
      ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P", "Ü"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
      ["Y", "X", "C", "V", "B", "N", "M"],
    ];

    const QWERTYKeyBoard = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      ["Z", "X", "C", "V", "B", "N", "M"],
    ];

    const KeyboardLayout = ref(QWERTZKeyBoard);

    //this controls the colors in the keyboard
    const ColorLayout = ref(Array(KeyboardLayout.value.length));
    InitializeKeyBoardColors();

    function InitializeKeyBoardColors() {
      for (let x = 0; x < ColorLayout.value.length; x++) {
        ColorLayout.value[x] = Array(KeyboardLayout.value[x].length);
        for (let y = 0; y < ColorLayout.value[x].length; y++) {
          ColorLayout.value[x][y] = Colors.White;
        }
      }
    }

    function SetKeyColor(KeyValue, color) {
      for (let x = 0; x < KeyboardLayout.value.length; x++) {
        for (let y = 0; y < KeyboardLayout.value[x].length; y++) {
          if (KeyboardLayout.value[x][y] === KeyValue) {
            if (ColorLayout.value[x][y] !== 3) {
              ColorLayout.value[x][y] = color;
            }
          }
        }
      }
    }

    function KeyPressed(value) {
      context.emit("keyPressed", value);
    }

    function Enter() {
      context.emit("enter");
    }

    function Back() {
      context.emit("backSpace");
    }

    return {
      KeyPressed,
      SetKeyColor,
      KeyboardLayout,
      ColorLayout,
      InitializeKeyBoardColors,
      Enter,
      Back,
    };
  },
};
</script>

<style scoped></style>
