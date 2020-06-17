<template>
  <div>
  <nav-bar/>
    <div class="grid-wrapper">
      <nuxt />
    </div>
  </div>

</template>

<script>
  import NavBar from "../components/NavBar";
  export default {
    components: {NavBar}
  }
</script>
<style>
  .grid-wrapper {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
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
  body{
    margin: 0;
  }

</style>
