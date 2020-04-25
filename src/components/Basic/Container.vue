<template>
  <div class="app-nomada-container">
    <slot/>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.app-nomada-container {
  display: flex;
  max-width: 950px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
