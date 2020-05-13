<template>
  <footer class=".footer">
    <p class="footer__main">Made with ❤️ By Fabian Gutierrez</p>
    <VaporSun class="footer__vapor-sun"/>
    <!-- <City class="footer__city"/> -->
    <p class="footer__credits credits-1">
      <a href="https://iconscout.com/icons/youtube" target="_blank">Youtube Logo Icon</a> by
      <a href="https://iconscout.com/contributors/roundicons-com" target="_blank">Roundicons .com</a>
    </p>
    <p class="footer__credits">
      <a href="https://iconscout.com/icons/github" target="_blank">Github Logo Icon</a> by
      <a href="https://iconscout.com/contributors/roundicons-com" target="_blank">Roundicons .com</a>
    </p>
  </footer>
</template>

<script>
import VaporSun from './VaporSun';
import City from '@/components/svg/City';
export default {
  components:{
    VaporSun,
    City
  }
};
</script>

<style lang="sass" scoped>
footer
  // padding: 20px
  // border-top: 1px solid #00f3ff
  background: #002f5c
  position: relative
.footer
  &__main
    font-family: 'Audiowide'
    font-size: 1.2em
    text-align: center
    color: white
    margin: auto
    margin-bottom: 15px
    position: absolute
    width: 100%
    top: 20px
    z-index: 100
    text-shadow: 0 0 2px black, 0 0 2px black, 0 0 5px black
  &__credits
    font-size: 0.8em
  &__city
    position: absolute
    bottom: -10px 
    filter: blur(1px)
  &__credits
    position: absolute
    bottom: 20px
    left: 10px
    &.credits-1
      bottom: 5px
</style>

<style scoped>

</style>