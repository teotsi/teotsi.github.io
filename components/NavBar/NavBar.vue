<template>
  <div class="nav">
    <div class="nav-options">
      <nuxt-link prefetch to="/"> Home</nuxt-link>
      <nuxt-link prefetch to="/projects"> Projects</nuxt-link>
      <nuxt-link prefetch to="/contact"> Contact</nuxt-link>
    </div>
    <font-awesome-icon :icon="icon" @click="toggleTheme" id="theme-icon" size="2x"/>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    methods: {
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
    data() {
      return {
        icon: this.$colorMode.value === "dark" ? ['fas', 'sun'] : ['fas', 'moon']
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav {
    margin: 0 auto;
    height: 50px;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    align-items: center;
    color: var(--color);
    background-color: var(--nav-color);

    &-options{
      grid-column: 2/3;
      display: flex;
      justify-content: space-evenly;
    }
    a{
      padding: 14.5px;
      background-color: inherit;
      &:hover{
        background-color: var(--link-bg-hover-color);
      }
    }
  }
</style>
