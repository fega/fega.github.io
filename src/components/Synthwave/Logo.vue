<template>
  <div class="synth-logo">
    <div class="name">Fabian Gutierrez</div>
    <div class="synth" data-text="FullStack"></div>
    <div class="neon">Developer</div>
    <div class="description">Javascript expert ● IT Security Specialist</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@import url(https://fonts.googleapis.com/css?family=Audiowide)
@import url(https://fonts.googleapis.com/css?family=Mr+Dafoe)
@keyframes noise-anim
  $steps: 20
  @for $i from 0 through $steps
    #{percentage($i*(1/$steps))}
      clip: rect(random(100)+px,9999px,random(100)+px,0)

.synth-logo
  z-index: 11

@keyframes neon1
  from
    text-shadow: 0 0 10px #fff, 0 0 20px #fff,  0 0 40px #FF1177

  to
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FF1177

@keyframes synth
  from
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00f3ff

  7%
    text-shadow: none
  14%
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00f3ff

  17%
    text-shadow: none
  25%
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #00f3ff

  50%
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f3ff, 0 0 35px #00f3ff

  80%
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00f3ff, 0 0 35px #00f3ff

  90%
    text-shadow: none

.synth-logo
  animation: noise-anim 2s infinite linear alternate-reverse
  margin-top: 50px
  margin-bottom: 20px
  transform: scale(0.6)
  @media(max-width: 600px)
    transform: scale(0.3)
    margin-top: 0px
    margin-bottom: 0px


.name
  font-family: 'Audiowide'
  color: white
  font-size: 40px
  letter-spacing: 30px
  position: relative
  left: 24px
  top: 30px
  animation: noise-anim 2s infinite linear alternate-reverse

  z-index: 3
.description
  font-family: 'Audiowide'
  color: white
  font-size: 40px
  letter-spacing: 3px
  position: relative
  margin-top: 200px
  margin-bottom: -10px
  // left: 24px
  // top: 30px
  z-index: 10
.neon
  grid-area: NEON
  animation: neon1 1.5s ease-in-out infinite alternate
  z-index: 2
  font-family: 'Mr Dafoe', cursive
  font-size: 150px
  font-weight: 100
  color: #fff
  filter: drop-shadow(0 0 22px #ff00f0)
  line-height: 1
  transform: rotateZ(-20deg)
  transform-origin: center left
  align-self: flex-end
  position: absolute
  right: 0px
.synth
  grid-area: SYNTH
  line-height: 1

  filter: drop-shadow(0 0 40px #12208a)
  $stroke: 10px
  &[data-text]
    display: inline-block
    font-size: 150px
    font-weight: normal
    font-family: 'Audiowide', sans-serif
    text-transform: uppercase
    letter-spacing: .065em
    position: relative
    margin: $stroke
    letter-spacing: 0px

    &:before
      content: attr(data-text)
      // text-shadow: 0 0 50px #12208a
      animation: synth 4.0s ease-in-out infinite

      background: linear-gradient(to bottom, white 0%, white 19%, #b7e3fe 30%, #3346bc 40%, white 60%, #3346bc 80%, #b7e3fe 100%)
      -webkit-text-stroke: $stroke transparent
      -webkit-background-clip: text
      background-clip: text
      color: transparent
      padding: $stroke

    &:after
      padding: $stroke
      content: attr(data-text)
      left: 0
      top: -$stroke
      position: absolute
      background-image: linear-gradient(to bottom, black 10%, #3557c6 23%, #00f3ff 35%, white 48%, black 48%, #7f158f 66%, #ff4caf 85%)
      -webkit-background-clip: text
      background-clip: text
      color: transparent
</style>