<template>
  <div class="header">
    <div class="nav">
      <a> Projects</a>
      <a> About</a>
      <a> Contact</a>
    </div>
    <font-awesome-icon :icon="icon" @click="toggleTheme" id="theme-icon" size="2x"/>
  </div>
</template>

<script>
    export default {
        name: "NavBar",
      methods:{
        toggleTheme() {
          if (this.$colorMode.preference === "dark") {
            this.$colorMode.preference = "light";
            this.icon = ['fas', 'moon']
          } else {
            this.$colorMode.preference = "dark";
            this.icon = ['fas', 'sun']
          }
        }
      },
      data(){
        return {
          icon: this.$colorMode.value==="dark"? ['fas', 'sun'] :['fas','moon']
        }
      }
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
