<template>
  <a :href="href" class="red-link" target="_blank">
    <slot/>
  </a>
</template>

<script>
export default {
  name: "RedLink",
  props: {
    href: String
  }
}
</script>

<style lang="scss" scoped>
.red-link {
  text-decoration: none;
  color: var(--header-color);
  background-color: rgba(239, 173, 176, 0.15);

  &:hover {
    color: var(--aueb-hover-color);
    background: rgba(118, 33, 36, 1);
  }

}
</style>
