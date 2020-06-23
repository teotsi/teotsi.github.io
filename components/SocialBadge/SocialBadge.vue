<template>
    <a :href="url" class="social-badge-container" target="_blank">
      <font-awesome-icon class="icon" :icon="['fab',name]" size="3x"/>
    </a>
</template>

<script>
    export default {
        name: "SocialBadge",
        props:{
          name:{
            type:String,
            required:true
          },
          url:{
            type:String,
            required:true
          }
        }
    }
</script>

<style scoped>
  .social-badge-container{
    background-color: initial;
  }
</style>
