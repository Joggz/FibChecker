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
      <p class="text-whte">{{max}}</p>
      <br />
      <br />

      <label class="text-white" @click="check">
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
      <button
        class="bg-transparent hover:bg-blue:500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-8 border border-blue-500 hover:border-transparent rounded"
        @click="add"
      >Add</button>
      <button
        class="bg-transparent hover:bg-blue:500 text-blue-700 font-semibold hover:text-white py-2 px-4 mt-8 border border-blue-500 hover:border-transparent rounded"
      >Submit</button>
    </div>
  </main>
</template>

<script>
import fib from '../assets/js/fib.js'
import add from '../assets/js/addSequence.js'

export default {
  name: "Form",

  data() {
    return {
      max: 0,
      randomNum: 0
    };
  },
  methods: {
    check() {
      // console.log(this.number, this.randomNum);
      console.log(Number(this.max) + 1)
      // console.log(fib(Number(this.max)))
       const result = fib(Number(this.max))
      console.log(result)
      // console.log(add(result))
    },
    add() {
      console.log('clicked')
      const result = fib(Number(this.max))
      console.log(result)
      console.log(add(result))
    }
  }
};
</script>

<style scoped>
#form {
  background: #111;
  height: 85vh;
  width: 100vw;
}

.formHeight {
  height: 9vh;
  /* border: 3px solid red; */
  width: inherit;
  /* height: inherit */
}
</style>