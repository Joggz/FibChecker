<template>
  <main id="form" class="flex flex-col justify-center content-center items-center">
    <div class="formHeight flex flex-col content-center justify-center">
      <label class="text-white">
        Max fib Number:
        <input
          class="num text-black"
          name="max"
          type="number"
          v-model="max"
          placeholder=" 8"
        />
      </label>
      <!-- <p class="text-whte">{{max}}</p> -->
      <br />
      <br />

      <label class="text-white" >
        Input Random Number:
        <input
          class="text-black"
          type="number"
          v-model="randomNum"
          placeholder=" 6 "
        />
      </label>

      <br />
    </div>
    <div>
      <p class="text-white mt-8"> validated sequence : {{sum}}</p>
      <ul class="flex list">
        <span class="text-white">
          Fib Sequence:
        </span>
         <li v-for="item in sequences" :key="item" class="text-white px-1">
          {{item}}
        </li>
      </ul>
      <p class="text-white">{{text}}</p>
      <button
        class="bg-transparent hover:bg-blue:500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-8 border border-blue-500 hover:border-transparent rounded"
        @click="add"
      >Add</button>
      <button
      @click="check"
        class="bg-transparent hover:bg-blue:500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-8 border border-blue-500 hover:border-transparent rounded"
      >Submit</button>

    </div>
  </main>
</template>

<script>
import fib from '../assets/js/fib.js'
import add from '../assets/js/addSequence.js'
import binarySearch from '../assets/js/binarySearch'
import check from '../assets/js/check'

export default {
  name: "Form",

  data() {
    return {
      max: '',
      randomNum: '',
      sum: '',
      sequences: [],
      text: ''
    };
  },

  methods: {
    check() {
       const result = fib(Number(this.max))
       this.sequences = result.fibarray
      return this.sequences

      
    },
    add() {
      const result = fib(Number(this.max))
      const sum = check(result.fibarray, Number(this.randomNum))
      this.sum = sum
      return this.sum
    },
    // searchRandom() {
    //     const randNum = Number(this.randomNum) 
    //     this.text = binarySearch(this.sequences, randNum)
    //     return this.text
    // }
  },

};
</script>

<style scoped>
#form {
  background: #111;
  height: 85.5vh;
  width: 100vw;
}

.formHeight {
  height: 9vh;
  /* border: 3px solid red; */
  width: inherit;
  /* height: inherit */
}

</style>