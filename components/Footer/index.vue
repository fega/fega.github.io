<template>
  <div
    :style="{color,background}"
    class="nomada-bulma-footer" >
    <div>
      <div>
        Made with love by
      </div>
      <img 
        class="default-layout-logo"
        src="~assets/compania-nomada-logo-white.svg" 
        alt="compañia nomada logo">
      <div>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {
      type: String,
      default: "#ffab00"
    },
    color: {
      type: String,
      default: "white"
    }
  }
};
</script>

<style lang="scss" scoped>
.nomada-bulma-footer {
  margin-top: 30px;
  padding-bottom: 4em;
  div {
    display: flex;
    flex-direction: column;
    max-width: 950px;
    margin: auto;
    justify-content: center;
    align-items: center;
    padding: 1em 0em;
  }
}
</style>
