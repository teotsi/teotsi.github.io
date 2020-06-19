<template>
  <div>
  <nav-bar/>
    <div class="grid-wrapper">
      <nuxt />
    </div>
  </div>

</template>

<script>
  import NavBar from "../components/NavBar/NavBar";
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


</style>
