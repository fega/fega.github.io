<template>
  <h2 ref="subtitle" class="synth-subtitle lax" data-lax-preset="driftFade eager2"><slot /></h2>
</template>

<script>
import lax from 'lax.js'
export default {
  mounted(){
    lax.addElement(this.$refs.subtitle)
  }
}
</script>

<style lang="sass" scoped>
.synth-subtitle
  color: white
  font-size: 2.5em
  text-shadow: 0 0 5px #fff, 0 0 20px #00f3ff
  margin-bottom: 20px
</style>