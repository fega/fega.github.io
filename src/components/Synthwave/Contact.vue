<template>
  <div  v-clipboard:copy="'fega.hg@gmail.com'"       v-clipboard:success="onCopy" class="contact-button lax" data-lax-preset="driftFade2">
    <div class="contact-button__email">fega.hg@gmail.com</div>
    <div class="contact-button__copy">Click to copy</div>
  </div>
</template>

<script>
import lax from 'lax.js'
export default {
  mounted(){
    lax.addElement(this.$el)
  },
  methods:{
    onCopy() {
      alert('Email copied')
    }
  }
};
</script>

<style lang="sass" scoped>
.contact-button
  font-size: 30px
  margin: auto
  width: fit-content
  display: flex
  color: white
  margin-bottom: 40px
  font-family: 'Audiowide'

  // background-color: black
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15)
  border-radius: 50px
  cursor: pointer
  text-shadow: 0 0 10px #fff, 0 0 20px #FF1177
  box-shadow: 0 0 10px #fff, 0 0 20px #FF1177
  transition: all 1s
  &:hover
    // box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3)
    box-shadow: 0 0 10px #fff, 0 0 20px #fff
    text-shadow: 0 0 10px #fff, 0 0 20px #fff

    // background-color: #7957d533
  @media (max-width: 612px)
    font-size: 20px
  @media (max-width: 433px)
    font-size: 13px
  &__email, &__copy
    border: 2px solid white
    padding: 10px
    margin: none
  &__email
    border-radius: 50px 0 0px 50px
    padding-left: 50px
    border-right: 0.5px solid white
    @media (max-width: 612px)
      padding-left: 30px
    @media (max-width: 433px)
      padding-left: 20px
  &__copy
    border-left: 0.5px solid white
    border-radius: 0px 50px 50px 0px
    padding-right: 50px
    
    @media (max-width: 612px)
      padding-right: 30px
    @media (max-width: 433px)
      padding-right: 20px
</style>