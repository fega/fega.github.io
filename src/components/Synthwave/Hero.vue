<template>
  <div>
  <section class="synth-hero">
    <Logo />
  </section>
  </div>
</template>

<script>
import Logo from './Logo';
// import Plane from './BackgroundPlane';
export default {
  components:{
    Logo,
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