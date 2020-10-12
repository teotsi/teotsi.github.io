<template>
  <a :href="project.url" class="project-preview-container">
    <h3 class="preview-header">{{ project.name }}</h3>
    <p class="preview-description">{{ project.description }}</p>
    <div class="project-preview-lang-details">
      <p>{{ project.language }}</p>
      <font-awesome-icon :icon="languageDict[project.language.toLowerCase()]" class="icon"
                         size="2x"></font-awesome-icon>
    </div>
    <!--    <p>{{project.pushed_at}}</p>-->
    <!--    <p>{{languages}}</p>-->
  </a>
</template>

<script>
export default {
  name: "ProjectPreview",
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      languageDict: {
        python: ['fab', 'python'],
        html: ['fab', 'html5'],
        javascript: ['fab', 'js-square'],
        vue: ['fab', 'vuejs'],
        java: ['fab', 'java']
      },
      languages: []
    }
  },
  async mounted() {
    // const languages = await this.$axios.$get(this.project.languages_url)
    // this.languages = Object.keys(languages)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@600&display=swap');

.project-preview- {
  &container {
    width: 400px;
    margin: 5px;
    border: 1px solid var(--border-color);

    p {
      margin: 5px auto;
      color: var(--header-color);
    }
  }

  &.lang-details {
    display: flex;
  }
}

.preview {
  &-header {
    color: var(--header-color);
    font-size: 24px;
    font-family: 'Zilla Slab', "Cambria Math", serif;
    margin: 5px auto;
  }

  &-description {
    font-size: 14px;
  }
}
</style>
