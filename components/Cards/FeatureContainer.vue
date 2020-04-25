<template>
  <div class="nomada-bulma-feature-container">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nomada-bulma-feature-container {
  display: flex;
  max-width: 950px;
  margin: auto;
  justify-content: center;
  // align-items: center;
  padding: 1em 0em;
  // flex-basis: 0;
  flex-wrap: wrap;
}
</style>
