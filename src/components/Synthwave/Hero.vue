<template>
  <section class="synth-hero">
    <Logo />
  </section>
</template>

<script>
import Logo from './Logo'
export default {
  components:{
    Logo
  }
}
</script>

<style lang="sass" scoped>
.synth-hero
  background: black
  min-height: 400px
  display: flex
  align-items: center
  justify-content: center

</style>