<template>
  <div class="container">
    <banner>Thodoris Tsigkanos</banner>
    <p class="subtitle">Hi! I am a CS student
      <red-link href="https://www.aueb.gr">@AUEB,</red-link> a Full Stack Developer
      and overall CS enthusiast. I like making stuff too,
      either with my hands or with IDEs. I play the guitar. I'm currently a Software Engineer <red-link href="https://www.linkedin.com/company/asianlogic-ltd.---bayview-technologies/">@AsianLogic</red-link>.</p>
    <p class="subtitle-muted">This site is a work in progress. Built using <a href="https://vuejs.org/" target="_blank">Vue.js</a>,
      along with <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a> for the generation of actually static pages.</p>
    <h2>Skills</h2>
    <div class="skill-container">
      <skill-category :header=category.header
                      :header-icon="category.headerIcon"
                      :icons="category.icons"
                      :key="name"
                      :custom-icons="category.customIcons"
                      v-for="(category,name) in categories"/>
    </div>
    <p class="subtitle">Check out my <nuxt-link prefetch to="/projects/">Projects</nuxt-link> page.</p>
  </div>
</template>

<script>

  import SkillCategory from "~/components/SkillCategory/SkillCategory.vue";
  import Banner from "../components/Logo/Banner";
  import RedLink from "@/components/RedLink/RedLink";
  export default {
    components: {RedLink, Banner, SkillCategory},
    data() {
      console.log('👀');
      return {
        categories: {
          frontend: {
            header: "Frontend",
            headerIcon: ['fas', 'desktop'],
            icons: [
              ['fab', 'js-square'],
              ['fab', 'vuejs'],
              ['fab', 'react'],
              ['fab', 'bootstrap'],
              ['fab', 'sass'],
            ],
          },
          backend: {
            header: "Backend",
            headerIcon: ['fas', 'tools'],
            icons: [
              ['fab', 'python'],
              ['fab', 'node-js'],
              ['fab', 'aws'],
            ],
            customIcons: [
              "spring",
              "elasticsearch"
            ]
          },
          misc: {
            header: "Misc",
            headerIcon: ['fas', 'code'],
            icons: [
              ['fab', 'java'],
              ['fab', 'python'],
              ['fab', 'android'],
              ['fas', 'network-wired'],
            ]
          }
        }
      }
    }
  }
</script>

<style lang="scss">

  .container {
    grid-column: 2/3;
  }

  .skill-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 700px) {
    .skill-container {
      justify-content: space-between;
      flex-wrap: nowrap;
    }
  }
</style>
