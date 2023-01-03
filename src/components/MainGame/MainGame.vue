<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <huxle-grid
        class="place-content-center"
        :GridArray="GridArray"
        :ColorArray="ColorArray"
      ></huxle-grid>
      <div class="h-14"></div>
      <KeyBoard
        class="place-content-center"
        @keyPressed="KeyPressed"
        @backSpace="BackSpace"
        @enter="Enter"
      ></KeyBoard>
    </div>
  </div>
</template>

<script>
import HuxleGrid from "./HuxleGrid.vue";
import KeyBoard from "./KeyBoard.vue";
import { ref } from "vue";

//these are the colors that are used in the HUXLE Grid
export const Colors = {
  White: 0, //Standard
  Red: 1, //Does Not Contain Letter
  Yellow: 2, //Contains Letter, But at anouther Position
  Green: 3, //Contains Letter at that Position
};

export default {
  name: "MainGame",
  components: { HuxleGrid, KeyBoard },
  setup(props, context) {
    //Grid Array is the thing that initializes the wordle-grid,
    //to resume game you could pass it in here
    const GridArray = ref(String[[]]);

    GridArray.value = [
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
      [" ", " ", " ", " ", " "],
    ];

    //this is used to set the appropriate colors after evaluating the input word
    const ColorArray = ref(Number[[]]);
    ColorArray.value = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    //This should come from the admin-pannel later, and should be passed in!
    const word = ["A", "S", "D", "E", "F"];

    let activeRow = 0;
    let activePositon = 0;

    function KeyPressed(val) {
      if (InsertIsAllowed()) {
        Insert(val);
      } else {
        console.log("not allowed!");
      }
    }

    function Insert(val) {
      GridArray.value[activeRow][activePositon] = val;
      activePositon += 1;
    }

    function InsertIsAllowed() {
      if (activePositon <= 4) {
        return true;
      }
      return false;
    }

    function BackSpace() {
      GridArray.value[activeRow][activePositon - 1] = " ";
      if (activePositon > 0) {
        activePositon -= 1;
      }
    }

    function Enter() {
      if (activePositon === 5) {
        EvaluateCurrentRow();
        let won = CheckWin();

        if (activeRow === 5 && !won) {
          console.log("You Lost!");
        } else {
          activePositon = 0;
          activeRow += 1;
        }
      } else {
        console.log("Cant Enter, word is not finished");
      }
    }

    function EvaluateCurrentRow() {
      let count = 0;
      for (let x = 0; x < 5; x++) {
        let contains = false;
        //check if it already found letter at this pos, so it doesent overwrite green with yellow
        let foundAtPos = false;
        for (let y = 0; y < 5; y++) {
          if (GridArray.value[activeRow][x] === word[y]) {
            contains = true;
            if (x === y) {
              //Contains Letter at same Position
              ColorArray.value[activeRow][x] = Colors.Green;
              foundAtPos = true;
              count += 1;
            } else {
              //Does Contain Letter, but at different Position
              if (!foundAtPos) {
                ColorArray.value[activeRow][x] = Colors.Yellow;
              }
            }
          }
        }
        //Does not contain letter
        if (!contains) {
          ColorArray.value[activeRow][x] = Colors.Red;
        }
      }
    }

    function CheckWin() {
      for (let i = 0; i < 5; i++) {
        if (GridArray.value[activeRow][i] != word[i]) {
          return false;
        }
      }
      console.log("Win!");
      return true;
    }

    return { KeyPressed, GridArray, ColorArray, BackSpace, Enter };
  },
};
</script>

<style scoped></style>
