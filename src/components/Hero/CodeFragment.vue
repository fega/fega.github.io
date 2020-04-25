<template>
  <div class="nomada-bulma-code-fragment">
    <div>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nomada-bulma-code-fragment {
  div {
    padding: 5px 18px;
    border-radius: 16px;
    background-color: rgba(0, 0, 0, 0.3);
    display: inline-block;
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-family: Courier, monospace;
    color: white;
  }
}
</style>
