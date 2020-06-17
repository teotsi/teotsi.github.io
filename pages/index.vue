<template>
  <div class="container">
    <h1 class="title">Thodoris Tsigkanos</h1>
    <p class="subtitle">I am a CS student
      <a href="https://www.aueb.gr" class="aueb-link" target="_blank">@AUEB.</a> I like making stuff too,
      either with my hands or with IDEs. I play the guitar. That about wraps it up.</p>
  </div>
</template>

<script lang="ts">

  export default {}
</script>

<style lang="scss">

  .container {
    grid-column: 2/3;
  }

  .subtitle{
    font-size: 21px;
  }
  .aueb-link{
    text-decoration: none;
    color: #762124;
    &:hover{
      color: #a55257;
    }
  }
</style>
