<template>
  <div class="flex grid grid-row-6 gap-1">
    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in QWERTZKeyBoard[0]"
        :value="item"
        :index="index"
        :key="item.id"
        @pressed="KeyPressed"
      />
    </div>

    <div class="flex gap-1 justify-self-center">
      <Key
        v-for="(item, index) in QWERTZKeyBoard[1]"
        :value="item"
        :index="index"
        :key="item.id"
        @pressed="KeyPressed"
      />
    </div>
    <div class="flex gap-1 justify-self-center">
      <BigKey value="Ent" @pressed="Enter"></BigKey>
      <Key
        v-for="(item, index) in QWERTZKeyBoard[2]"
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

    function KeyPressed(value) {
      context.emit("keyPressed", value);
    }

    function Enter() {
      context.emit("enter");
    }

    function Back() {
      context.emit("backSpace");
    }

    return { KeyPressed, QWERTZKeyBoard, Enter, Back };
  },
};
</script>

<style scoped></style>
