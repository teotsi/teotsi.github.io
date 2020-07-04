<template>
  <div class="skill-category">
    <h3 class="skill-header">{{header}}</h3>
    <font-awesome-icon :icon="headerIcon" class="icon" size="3x"/>
    <div class="skill-category-details">
      <div class="skill-category-icons">
        <font-awesome-icon
          :icon="icon"
          :key="index"
          class="icon"
          size="2x"
          v-for="(icon, index) in icons"/>
        <!--        <img v-for="(icon,index) in customIcons"-->
        <!--             class="icon"-->
        <!--             :key="index"-->
        <!--             :src="icon"-->
        <!--             width="32" alt="icon">-->
        <component :is="extraIcons[icon]"
                   :key="icon.toString()"
                   class="icon extra-icon"
                   v-for="icon in customIcons"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SpringLogo from "~/assets/icons/spring.svg";
  import ElasticsearchLogo from "~/assets/icons/elasticsearch.svg";
  export default {
    name: "SkillCategory",
    props: {
      header: {
        type: String,
        required: true
      },
      headerIcon: {
        type: Array,
        required: true
      },
      icons: {
        type: Array,
        required: true
      },
      customIcons: {
        type: Array
      }
    },
    data() {
      return {
        extraIcons: {
          spring: SpringLogo,
          elasticsearch: ElasticsearchLogo
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .skill {
    &-category {
      width: 100%;
      max-width: 480px;
      &:hover {
        background-color: var(--category-hover-bg);
      }

      &-header {
        margin: 20px auto 10px;
      }

      &-icons {
        padding: 20px 0;
        display: flex;
        justify-content: space-around;
      }
    }
  }
  @media (min-width:700px) {
    .skill-category:not(:last-child) {
      border-right: 1px solid var(--border-color);
    }
  }
</style>
