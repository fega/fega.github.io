<template>
    <div class="scene">
      <div class="container">
        <div class="sun"></div>
         <transition appear name="fade-long">
          <img class="logo" src="~/assets/icons/youtube.svg">
          </transition>
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
      </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
$bg: #000
$size: 30vw
.logo
  margin-top: 60px
  transform: scale(0.5)
  @media(max-width: 900px)
    margin-top: 40px
    transform: scale(0.6)

  @media(max-width: 600px)
    margin-top: 25px
    transform: scale(0.7)

.scene
  display: flex
  justify-content: center
  align-items: center
  width: 100%
  // background-color: $bg
  filter: blur(2px) contrast(3)
  height: 500px
  margin-bottom: -50px
  @media(max-width: 900px)
    height: 400px

  @media(max-width: 600px)
    filter: blur(1px) contrast(3)
    height: 200px
    margin-top: 50px
.container
  position: relative
  height: $size
  width: $size
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
  animation: hue-rotate 60s ease-in-out infinite 5s

.band
  position: absolute
  bottom: $size/-5
  width: 100%
  height: 10%
  background: $bg
  animation: wave 10s linear infinite

@keyframes wave
  0%
    transform: translateY(0) scaleY(1)

  100%
    transform: translateY($size*-0.8) scaleY(0)

// @keyframes hue-rotate
//   0%
//     filter: hue-rotate(360deg)

//   100%
//     filter: hue-rotate(0deg)
</style>