<template>
    <div class="composition">

      <transition name="grow">
        <!-- <Lights3 v-if="showLights4" class="absolute lights4" /> -->
      </transition>
      <Pieces class="absolute pieces" />
      <Phone class="absolute" />
      <Lights1 class="absolute lights1" />
      <Lights2 class="absolute lights2" />
      <Lights3 class="absolute lights3" />
      <Comment class="absolute comment" />
    </div>
</template>

<script>
import Pieces from "./Pieces";
import Lights1 from "./Lights1";
import Lights2 from "./Lights2";
import Lights3 from "./Lights3";
import Comment from "./Comment";
import Phone from "./Phone";
export default {
  components: { Phone, Comment, Lights1, Lights2, Lights3, Pieces },
  data() {
    return {
      showLights4: false
    };
  },
  mounted() {
    setTimeout(() => (this.showLights4 = true), 1000);
  }
};
</script>

<style lang="sass"  scoped>
@keyframes wave
  50%
    transform: translateY(2.5em) scale(1.5)

@keyframes scale-wave
  50%
    transform: scale(1.3)


.absolute
  position: absolute
  top: 30%
  left: 60%
  transform: scale(1.5)
  
  
.composition
  position: absolute
  right: 500px
  top: 200px
  @media (max-width: 768px) 
    right: 100%

.comment
  animation: wave 5s 0s ease-in-out infinite

.lights1
  margin-top: -30px
  &
    animation: scale-wave 3s 0s ease-in-out infinite
    transform-origin: 50% 20%

    position: absolute
    margin-top: -60px
    margin-left: 156px

.lights2
  animation: scale-wave 3s 1s ease-in-out infinite
  transform-origin: 50% 20%

  position: absolute
  margin-top: -20px
  margin-left: 134px

.lights3
  animation: scale-wave 3s 2s ease-in-out infinite
  transform-origin: 50% 20%

  position: absolute
  margin-top: 0px
  margin-left: 124px

.lights4
  transform-origin: 50% 20%
  transform: scale(3)
  position: absolute
  margin-top: 0px
  margin-left: 124px
  transition: all 2s

.pieces
  position: absolute
  margin-top: -200px
  margin-left: -30px
</style>