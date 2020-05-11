<template>
  <div>

  <section class="synth-hero">
    <Logo />
  </section>
    <Plane />
  </div>
</template>

<script>
import Logo from './Logo';
// import Plane from './BackgroundPlane';
export default {
  components:{
    Logo,
    // Plane
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