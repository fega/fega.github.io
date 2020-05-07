<template>
  <div v-clipboard:copy="'fega.hg@gmail.com'"       v-clipboard:success="onCopy" class="contact-button">
    <div class="contact-button__email">fega.hg@gmail.com</div>
    <div class="contact-button__copy">Click to copy</div>
  </div>
</template>

<script>
export default {
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
  display: flex
  margin-bottom: 40px
  background-color: white
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15)
  border-radius: 50px
  cursor: pointer
  transition: all 0.3s
  &:hover
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3)
    background-color: #7957d533
  @media (max-width: 612px)
    font-size: 20px
  @media (max-width: 433px)
    font-size: 13px
  &__email, &__copy
    border: 2px solid gray
    padding: 10px
    margin: none
  &__email
    border-radius: 50px 0 0px 50px
    padding-left: 50px
    border-right: 0.5px solid gray
    @media (max-width: 612px)
      padding-left: 30px
    @media (max-width: 433px)
      padding-left: 20px
  &__copy
    border-left: 0.5px solid gray
    border-radius: 0px 50px 50px 0px
    padding-right: 50px
    
    @media (max-width: 612px)
      padding-right: 30px
    @media (max-width: 433px)
      padding-right: 20px
</style>