<template>
    <div class="scene">
      <div class="container-sun">
        <div class="gradient"></div>
        <div class="sun"></div>
        <div class="band" style="animation-delay: -0s"></div>
        <div class="band" style="animation-delay: -1s"></div>
        <div class="band" style="animation-delay: -2s"></div>
        <div class="band" style="animation-delay: -3s"></div>
        <div class="band" style="animation-delay: -4s"></div>
        <div class="band" style="animation-delay: -5s"></div>
        <div class="band" style="animation-delay: -6s"></div>
        <div class="band" style="animation-delay: -7s"></div>
        <div class="band" style="animation-delay: -8s"></div>
        <div class="band" style="animation-delay: -9s"></div>
        <div class="band" style="animation-delay: -10s"></div>
        <div class="band" style="animation-delay: -11s"></div>
        <City class="city"/>
      </div>
    </div>
</template>

<script>
import City from '@/components/svg/City';

export default {
  components:{City}
};
</script>

<style lang="sass" scoped>
$bg: #033b71
$size: 30vw
.logo
  transform: scale(0.5)
.scene
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  background-color: $bg
  margin-top: 70px
  // padding-top: 10px
  // animation: hue-rotate-contrast 60s ease-in-out infinite 5s
  
  filter: blur(1px) contrast(3)
  overflow: hidden
.container-sun
  position: relative
  height: $size
  width: 100%
  // width: $size
  overflow: hidden

.sun
  position: absolute
  top: 0
  left: 50%
  transform: translate(-50%, 0)
  width: $size
  height: $size
  background: radial-gradient(transparent 65%, #ff0488 100%), linear-gradient(#ffcb55 0, #ff0488 100%)
  border-radius: 50%

.band
  position: absolute
  filter: blur(2px)
  bottom: $size/-5
  width: 100%
  height: 10%
  background: $bg
  animation: wave 12s linear infinite
.city
  z-index: 10
  position: relative
  bottom: -30%
  width: 100%
  filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 5px #FF1177)
.gradient
  position: absolute
  top: -12px
  width: 100%
  height: 40%
  background: linear-gradient(to bottom, black, $bg)
@keyframes wave
  0%
    transform: translateY(0) scaleY(1)

  100%
    transform: translateY($size*-0.8) scaleY(0)

@keyframes hue-rotate
  0%
    filter: hue-rotate(360deg)

  100%
    filter: hue-rotate(0deg)

@keyframes hue-rotate-contrast
  0%
    filter: hue-rotate(360deg)  blur(2px) contrast(3)

  100%
    filter: hue-rotate(0deg) blur(2px) contrast(3)
</style>