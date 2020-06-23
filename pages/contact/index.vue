<template>
  <div class="contact-container">
    <h2>Contact me</h2>
    <p class="subtitle">To check out all my projects, visit the links below.
      To reach me, <a href="mailto:teotsi@gmail.com">shoot me an email</a>, or send a pigeon!</p>
    <div class="social-container">
      <social-badge name="npm" url="https://www.npmjs.com/~teotsi"/>
      <social-badge name="github" url="https://www.github.com/teotsi"/>
    </div>
  </div>
</template>

<script>
    import SocialBadge from "../../components/SocialBadge/SocialBadge";
    export default {
        name: "index",
      components: {SocialBadge}
    }
</script>

<style scoped>
  .contact-container{
    grid-column: 2/3;
  }
  .social-container{
    display: flex;
    justify-content: space-evenly;
  }
</style>
