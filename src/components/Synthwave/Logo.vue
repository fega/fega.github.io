<template>
  <div class="synth-container">
    <div class="synth-logo lax" ref="logo">
      <transition name="vapor" mode="out-in"  duration>
        <FabianLogo v-if="show==='logo'" key="logo" />
        <VaporSun v-if="show==='vapor'" key="vapor"/>
        <VaporSunYoutube v-if="show==='youtube'" key="youtube"/>
      </transition>
    </div>
    <div  class="hero-buttons lax" data-lax-preset="eager2" ref="heroButtons">
      <flat-button
        class="button"
        color="#2196f3"
        blend="saturation"
        @mouseover="setColor($event,'vapor')"
        @click="goTo('https://github.com/fega')"
      >GitHub</flat-button>
      <flat-button
        color="rgba(0,0,0,0)"
        class="button"
        blend="saturation"
        @mouseover="setColor($event,'logo')"
        @click="goTo('https://www.linkedin.com/in/fabiangutierreza/')"
      >LinkedIn</flat-button>
      <flat-button
        color="#c62828"
        class="button"
        blend="multiply"
        @mouseover="setColor($event, 'youtube')"
        @click="goTo('https://www.youtube.com/channel/UCSJWn-oCkNXxxUomuL1zz3g')"
      >Youtube</flat-button>
    </div>
  </div>
</template>

<script>
import lax from 'lax.js'
import FlatButton from "./FlatButton";
import VaporSun from './VaporSunGithub';
import VaporSunYoutube from './VaporSunYoutube';
import FabianLogo from './FabianLogo';
export default {
  components: {
    FlatButton,
    VaporSun,
    FabianLogo,
    VaporSunYoutube
  },
  data() {
    return {
      show: "logo"
    };
  },
  mounted() {
    lax.addElement(this.$refs.heroButtons)
    lax.addElement(this.$refs.logo)
  },
  methods: {
    setColor(_, name) {
      this.show = name;
    },
    goTo(url) {
      window.location = url;
    }
  }
};
</script>

<style lang="sass">
// FADE
.fade
  &-enter-active, &-leave-active
    transition: opacity 0.5s
  &-enter, &-leave-to
    opacity: 0
// FADE LOG
.fade-long
  &-enter-active, &-leave-active
    transition: opacity 1s
    transition-delay: 1s
    transition-duration: 1s
    transition-timing-function: linear
  &-enter, &-leave-to
    opacity: 0

// SIDE
.side
  &-enter-active,  &-leave-active
    transition: all 1s
    text-shadow: none !important
    animation: none !important
    will-change: opacity, transform, text-shadow

  &-enter,  &-leave-to
    transform: translate(-200px)
    opacity: 0

// OTHER SIDE
.side2
  &-enter-active, &-leave-active
    transition: all 1s
    text-shadow: none !important
    will-change: opacity, transform

  &-enter, &-leave-to
    transform: translate(550px)
    opacity: 0

// UP
.up
  &-enter-active, &-leave-active
    transition: all 1s
    will-change: opacity, transform, text-shadow

  &-enter, &-leave-to
    transform: translateY(-100px) !important
    color: #FF1177 !important
    animation: none !important
    text-shadow: none !important
    opacity: 0

.vapor
  &-enter-active, &-leave-active
    transition: all 1s
    will-change: opacity, transform

  &-enter, &-leave-to
    transform: translateY(100px)
    opacity: 0


// OTHER SIDE
.shrink
  &-enter-active, &-leave-active
    transition: all 1s
    will-change: opacity, transform

  &-enter, &-leave-to
    transform: scale(1.5)
    opacity: 0
</style>

<style lang="sass" scoped>
.synth-logo
  z-index: 11

.synth-container
  width: 100%
  display: flex;
  align-items: center;
  flex-direction: column
  margin-bottom: 20px
  // height: 500px;

.hero-buttons
  display: flex
  margin-top: 60px
  // position: absolute
  width: 100%
  top: 400px
  z-index: 12

</style>