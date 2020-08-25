<template>
  <div class="project-wrapper">
    <h2>Projects</h2>
    <p class="subtitle">Below is an up-to-date list of my Github projects using the Github API(v3). </p>
    <transition-group class="project-previews-wrapper" name="fade" tag="div">
      <project-preview :key="project.id"
                       :project="project"
                       v-for="project in projects"/>
    </transition-group>
    <transition name="fade">
      <project-preview-placeholder v-if="projects.length===0"/>
    </transition>
  </div>

</template>

<script>
import ProjectPreview from "../../components/Project/ProjectPreview";
import ProjectPreviewPlaceholder from "~/components/Project/ProjectPreviewPlaceholder";

export default {
  name: "index",
  components: {ProjectPreviewPlaceholder, ProjectPreview},
  data() {
    return {
      projects: []
    }
  },
  async mounted() {
    const projects =  await this.$axios.$get('https://api.github.com/users/teotsi/repos')
    this.projects = projects.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime())
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
