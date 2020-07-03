<template>
  <div class="container">
    <div>
      <div class="links" v-if="!isHidden">
        <h2
          class="text-xl text-teal-500"
        >Let's do some Fibo magic, click on the button to get started</h2>
        <br />
        <button v-on:click="isHidden = true" class="button--green">Calculate Fibonnacci sequence</button>
      </div>
    </div>
    <!-- <h2 v-if="isHidden">form for fib</h2> -->
    <section v-if="isHidden">
      <Form />
    </section>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Form from "~/components/form.vue";

export default {
  // el: ".container",
  data() {
    return {
      isHidden: false
    };
  },

  components: {
    Logo,
    Form
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 85.5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
