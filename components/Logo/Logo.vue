<template>
  <h1 class="title">{{headerText}}</h1>
</template>

<script>
    export default {
        name: "Logo",
      props:{
          text:String
      },
      data(){
          return{
            headerText : this.text
          }
      }
    }
</script>

<style scoped>

</style>
