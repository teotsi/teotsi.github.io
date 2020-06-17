<template>
  <div class="header">
    <div class="nav">
      <a> Projects</a>
      <a> About</a>
      <a> Contact</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
  .nav{
    margin: 0 auto;
    width: 50%;
    display: flex;
    justify-content: space-between;
  }
  .header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50px;
    color: var(--color);
    background-color: var(--nav-color);
  }
</style>
