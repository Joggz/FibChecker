<template>
  <div class="main">
    
    <nav class="nav bg-teal-500  h-12">
      <div class="logo">
        <h1 class="text-white pt-2 pl-4 text-2xl"><span class="text-black-700 bg-red text-opacity-100">FIB</span>CHECKER</h1>
      </div>
  </nav>
    <nuxt />

    <footer class="nav bg-teal-500  h-12 flex justify-center">
      <div class="footer flex justify-center align-center">
        <h3 class="text-white text-lg">&copy;laoye_jnr</h3>
      </div>
  </footer>
  </div>
</template>


<script>
  

</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main {
  height: 100vh;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
