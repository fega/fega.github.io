<template>
  <div class="v2-project-card lax" data-lax-preset="driftFade3">
    <div class="card">
      <div class="card-image">
        <figure class="image" style="overflow: hidden">
          <img :src="image" style="width:240px; height: 240px; object-fit: cover; " />
          <div class="crt" :style="{background:`repeating-linear-gradient(${color}, transparent 1px, transparent 0px, transparent 2px)`}"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4" style="margin:0px">{{title}}</p>
            <p class="subtitle is-6" style="margin:0px; height: 60px; overflow:hidden">{{description}}</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a v-if="buttons.url" :href="buttons.url" target="_blank" class="card-footer-item">See</a>
        <a v-if="buttons.video" :href="buttons.video" target="_blank" class="card-footer-item">Video</a>
        <a
          v-if="buttons.appStore"
          :href="buttons.appStore"
          target="_blank"
          class="card-footer-item"
        >App Store</a>
      </footer>
    </div>
  </div>
</template>

<script>
import lax from 'lax.js'
export default {
  props: {
    image: {
      default: "https://bulma.io/images/placeholders/1280x960.png",
      type: String
    },
    title: {
      type: String
    },
    roles: {
      type: Array
    },
    description: {
      type: String
    },
    video: {
      type: String
    },
    color: {
      type: String,
      default: "black"
    },
    buttons: {
      default: () => ({})
    }
  },
  mounted(){
    // lax.addElement(this.$el)
  }
};
</script>

<style lang="sass" scoped>
.v2-project-card
  max-width: 260px
  padding: 15px
  color: white
  position: relative
  & .card
    background: rgba(0,0,0,0.2)
    color: white
    box-shadow:  0 0 15px #00f3ff
    border-radius: 15px 2px  15px 2px
  & .title
    color: white
    font-size: 1.2em

  & .subtitle
    color: rgba(255,255,255,0.8)
    font-size: 1em
  & .card-footer
    border-top: 1px solid black
  & a
    color: white
    box-shadow: 0 0 5px #00f3ff
    text-shadow: 0 0 5px #FF1177
    transition: text-shadow,box-shadow 0.5s
    &:hover
      text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 10px #FF1177, 0 0 20px #FF1177, 0 0 32px #FF1177
      box-shadow: 0 0 5px #fff,0 0 10px #fff,0 0 15px #00f3ff,0 0 20px #00f3ff
      filter: drop-shadow(0 0 30px #ff00f0)
      

  & img
    transition: transform 0.5s cubic-bezier(0.82, 0.09, 0.2, 1.01)
    transform: scale(1.2)
    &:hover
      transform: scale(1)

</style>
<style>
.crt {
  position: absolute;
  z-index: 9999;
  width: 240px;
  height: 240px;
  pointer-events: none;
  top: 0;
  background-size: 250% 250%;
  animation-name: movement;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: both;
}

@keyframes movement {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 0% 2px;
  }
}
</style>
