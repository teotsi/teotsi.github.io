<template>
  <div class="container">
    <h1 class="title">Thodoris Tsigkanos</h1>
    <p class="subtitle">Hi! I am a CS student
      <a class="aueb-link" href="https://www.aueb.gr" target="_blank">@AUEB,</a> a Full Stack Developer
      and overall CS enthusiast. I like making stuff too,
      either with my hands or with IDEs. I play the guitar.</p>
    <h2>Skills</h2>
    <div class="skill-container">
      <skill-category :header=category.header
                      :header-icon="category.headerIcon"
                      :icons="category.icons"
                      :key="name"
                      :custom-icons="category.customIcons"
                      v-for="(category,name) in categories"/>
    </div>
  </div>
</template>

<script lang="ts">

  import SkillCategory from "~/components/SkillCategory/SkillCategory.vue";
  export default {
    components: {SkillCategory},
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

  .skill-container {
    display: flex;
    justify-content: space-between;
  }

  .subtitle {
    font-size: 21px;
  }

  .aueb-link {
    text-decoration: none;
    color: var(--header-color);
    background-color: rgba(239, 173, 176, 0.4);
    &:hover {
      background: rgba(118, 33, 36, 0.3);
    }
  }
</style>
