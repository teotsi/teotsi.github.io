<template>
  <div class="project-wrapper">
    <h2>Projects</h2>
    <p class="subtitle">Below is an up-to-date list of my Github projects using the Github API(v3). </p>
    <div class="project-previews-wrapper">
      <project-preview :key="project.id"
                       :project="project"
                       v-for="project in projects"/>
    </div>
  </div>

</template>

<script>
  import ProjectPreview from "../../components/Project/ProjectPreview";

  export default {
    name: "index",
    components: {ProjectPreview},
    data() {
      return {
        projects: {}
      }
    },
    async mounted() {
      this.projects = await this.$axios.$get('https://api.github.com/users/teotsi/repos')
      this.projects = this.projects.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
    }
  }
</script>

<style lang="scss" scoped>
  .project- {
    &wrapper {
      grid-column: 2/3;
    }

    &previews-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
