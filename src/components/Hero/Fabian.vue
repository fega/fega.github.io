<template>
  <div :style="heroColor" class="hero">
    <div class="hero-wrapper">

    <IsometricGrid />
    <div class="light-experiment"/>
    <Corner class="corner1"/>
    <Corner class="corner2"/>
    <transition name="fade">
      <Phone v-if="!hoverName || hoverName==='linkedIn'" />
    </transition>
    <transition name="fade">
      <Github v-if="hoverName==='github'" />
    </transition>
    <transition name="fade">
    <Youtube v-if="hoverName==='youtube'" />
    </transition>

    <div class="hero-backdrop">
      <div class="hero-subtitle">I'm Fabian Gutierrez.</div>
      <div class="hero-title">Node.js FullStack Developer</div>
      <div class="hero-subtitle">IT Security Specialist, ISO27001 internal auditor .</div>
      <div class="hero-buttons">
        <flat-button
          class="button"
          color="#2196f3"
          blend="saturation"
          @mouseover="setColor($event,'github')"
          @click="goTo('https://github.com/fega')"
        >GitHub</flat-button>
        <flat-button
          color= "rgba(0,0,0,0)"
          class="button"
          blend="saturation"
          @mouseover="setColor($event,'linkedIn')"
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
  </div>
    </div>

</template>

<script>
import FlatButton from "@/components/Basic/FlatButton";
import Phone from "@/components/Isometric/PhoneAnimated";
import Youtube from "@/components/Isometric/Youtube";
import Github from "@/components/Isometric/Github";
import IsometricGrid from "@/components/Isometric/Grid";
import Corner from '@/components/Isometric/Corner';

export default {
  components: { FlatButton, Phone, IsometricGrid, Youtube, Github, Corner },
  data() {
    return {
      hoverName: null,
      heroColor: {
        backgroundColor: "rgba(0,0,0,0)"
      }
    };
  },
  methods: {
    setColor(ev, hover) {
      this.hoverName = hover;
      this.heroColor.backgroundColor = ev.target.attributes.color.value;
      this.heroColor.backgroundBlendMode = ev.target.attributes.blend.value;
    },
    goTo(url) {
      window.location = url;
    }
  }
};
</script>

<style lang="sass" scoped>
.corner1
  position: absolute
  bottom: -10px
  right: -10px
  transform-origin: 110% 110%;
  transform: scale(0.6)
.corner2
  position: absolute
  bottom: -10px
  left: 100px
  transform-origin: bottom left;
  transform: scaleX(-0.5) scaleY(0.5)
.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  opacity: 0

.hero
  overflow: hidden
  background-blend-mode: saturation
  display: flex
  position: relative
  align-items: center
  background: #00F260
  background: linear-gradient(30deg, #ff00cc, #333399)
  &-wrapper
    display: flex
    // position: relative
    align-items: flex-start
    width: 100%
  &-backdrop
    background-color: rgba(0,0,0,0)
    backdrop-filter: blur(2px)
    padding: 40px
    border-radius: 15px
    align-self: flex-start
    @media (max-width: 768px)
      background-color: rgba(0,0,0,0.2)
      padding: 10px
      backdrop-filter: blur(3px)
      right: 100%
</style>