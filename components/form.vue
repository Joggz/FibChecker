<template>
  <main id="form" class="flex flex-col justify-center content-center items-center">
    <div class="formHeight flex flex-col content-center justify-center">
      <label class="text-white">
        Max fib Number:
        <input
          class="num text-black"
          name="max"
          type="number"
          v-model="number"
          placeholder=" 8"
        />
      </label>
      <p class="text-whte">{{number}}</p>
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
      >Submit</button>
    </div>
  </main>
</template>

<script>
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
      console.log(this.number, this.randomNum);
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