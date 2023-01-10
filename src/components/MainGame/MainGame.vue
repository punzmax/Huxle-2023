<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <nav-bar></nav-bar>
      <button class="bg-blue-500 rounded text-white px-4 py-2 mb-8 ml-60">
        <button @click="checkModal('en') " class="hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800">English</button> | 
        <button @click="checkModal('ge')" class="hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-800">Deutsch</button>
      </button>
      <modal name="language-modal" v-if="showModal" class="bg-red-100 fixed flex items-center justify-center">
        <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-6">
          <p class="bg-red-500 px-20 py-5">Discard your progress and switch languages?

        <button @click="changeLanguage" class="hover:bg-red-700 active:bg-red-800 focus:bg-red-800 px-10 py-10">Yes</button>
        <button @click="showModal= false" class="hover:bg-red-700 active:bg-red-800 focus:bg-red-800 ml-10 px-10 py-10">No</button>
          </p>
        </div>
      </modal>
      <modal name="language-modal" v-if="showWinModal" class="fixed flex items-center justify-center">
        
        <div class="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center p-6">
          <p class="bg-purple-300 px-10 py-5"><button @click="exitPopUp" class="mr-5 hover:bg-purple-300">Exit ❎</button>{{ status }}</p>

        </div>

      </modal>

      <main-title :text="'Play game!'"></main-title>

      <huxle-grid
        class="place-content-center"
        :GridArray="GridArray"
        :ColorArray="ColorArray"
      ></huxle-grid>
      <div class="h-14"></div>
      <KeyBoard
        class="place-content-center"
        ref="keyboardRef"
        @keyPressed="KeyPressed"
        @backSpace="BackSpace"
        @enter="checkWinModal"
      ></KeyBoard>
    </div>
  </div>
</template>

<script>
import ConfettiExplosion from "vue-confetti-explosion";
import NavBar from "@/components/Shared/Navigation/NavBar.vue";
import HuxleGrid from "./HuxleGrid.vue";
import KeyBoard from "./KeyBoard.vue";
import { ref, defineComponent } from "vue";
import MainTitle from "@/components/Shared/TitleBlocks/MainTitle.vue";

var word="asdef"
//
const decodeHashLink = (hash) => {
  
  const encodedData = hash

  const decodedData = window.atob(encodedData);
  return decodedData;
};
let stl;
//these are the colors that are used in the HUXLE Grid
export const Colors = {
  White: 0, //Standard
  Grey: 1, //Does Not Contain Letter
  Yellow: 2, //Contains Letter, But at anouther Position
  Green: 3, //Contains Letter at that Position
};

export default {
  name: "MainGame",
  props: ['url'],
  components: { MainTitle, NavBar, HuxleGrid, KeyBoard },
  data () {
    return {
      showModal: false,
      language: 'en',
      showWinModal: false,
      status: "",
    }
  },
  methods: {
    checkModal (lang) {
      if (this.language !== lang) {
        this.showModal = true
      }
    },
    changeLanguage () {
      this.showModal = false
      this.language = this.language === 'en' ? 'ge' : 'en'
      this.SetWord(this.language)
    },
    checkWinModal () {
      this.status= this.Enter()
      if(this.status!="" &&this.status!=undefined)
      {
        console.log(this.status)
        this.showWinModal = true
      }
    },
    exitPopUp () {
      this.showWinModal = false
      this.status = ""
    },
  },

  setup(props, context) {
    stl=props.url

    if (!props.url.endsWith("=")) {
      stl = "QVNERUYsICAgICA=";
}
    const decodedwords= decodeHashLink(stl);
    const wordlang1=decodedwords.substring(0, decodedwords.indexOf(","))
    const wordLang2=decodedwords.substring(decodedwords.indexOf(",")+1, decodedwords.length)
    word=wordlang1

    //Grid Array is the thing that initializes the wordle-grid,
    //to resume game you could pass it in here
    const GridArray = ref(String[[]]);

    //this is used to set the appropriate colors after evaluating the input word
    const ColorArray = ref(Number[[]]);
    
    //This should come from the admin-pannel later, and should be passed in!
    let activeRow = 0;
    let activePositon = 0;

    //Ref to keyboard, so we can re-colour the keys
    const keyboardRef = ref();

    Initialize();
  
   
   
   

    function Initialize() {
      ColorArray.value = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ];
      GridArray.value = [
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " "],
      ];
      activeRow = 0;
      activePositon = 0;
      if (keyboardRef.value !== undefined) {
        keyboardRef.value.InitializeKeyBoardColors();
      }
    }

    function KeyPressed(val) {
      if (InsertIsAllowed()) {
        Insert(val);
      } else {
        console.log("Insert is not allowed");
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
        if(won){
          return "Congratulations! You won! 🎉"
        }

        if (activeRow === 5 && !won) {
          Initialize();
          return "You Lost! Try again! 🤕"
        } else if (!won) {
          activePositon = 0;
          activeRow += 1;
        }
      } else {
        return "Please fill in all 5 letters!"
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
              SetKeyColor(GridArray.value[activeRow][x], Colors.Green);
              foundAtPos = true;
              count += 1;
            } else {
              //Does Contain Letter, but at different Position
              if (!foundAtPos) {
                ColorArray.value[activeRow][x] = Colors.Yellow;
                SetKeyColor(GridArray.value[activeRow][x], Colors.Yellow);
              }
            }
          }
        }
        //Does not contain letter
        if (!contains) {
          ColorArray.value[activeRow][x] = Colors.Grey;
          SetKeyColor(GridArray.value[activeRow][x], Colors.Grey);
        }
      }
    }

    function CheckWin() {
      for (let i = 0; i < 5; i++) {
        if (GridArray.value[activeRow][i] !== word[i]) {
          return false;
        }
      }
      console.log("Win!");
      Initialize();
      return true;
    }

    function SetKeyColor(Key, col) {
      keyboardRef.value.SetKeyColor(Key, col);
    }
    function SetWord(lang){
      if(lang=='en'){
        word= wordlang1
      }else{
        word= wordLang2
      }
      Initialize();
      console.log(word)
      
    }
  
    return { KeyPressed, GridArray, ColorArray, BackSpace, Enter, keyboardRef, SetWord, CheckWin };
  },
};
</script>

<style scoped></style>
