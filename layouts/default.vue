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
    grid-template-columns: 1% 98% 1%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 700px) {
    .grid-wrapper{
      grid-template-columns: 1fr 7fr 1fr;
    }
  }

  @media (min-width: 1000px) {
    .grid-wrapper {
      grid-template-columns: 1fr 3fr 1fr;
    }
  }

</style>
