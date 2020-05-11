<template>
  <div class="experience-card">
    <div class="experience-card__logo-container">
      <img class="experience-card__logo" :src="image" :alt="title">
    </div>
    <div class="experience-card__content-container">
      <div class="experience-card__column">
        <h2 class="experience-card__title">{{title}}</h2>
        <h3 class="experience-card__company">
          {{company}}
          <span class="experience-card__date">({{start}} - {{end}})</span>
        </h3>
        <p class="experience-card__descripcion" v-html="description"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: {
      type: String
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    company: {
      type: String
    },
    start: {
      type: String
    },
    end: {
      type: String
    }
  }
}
</script>

<style lang="sass">
.experience-card
  width: -webkit-fill-available
  margin: 20px 20px
  display: flex;
  color: rgba(255,255,255,0.8)
  h1,h2,h3,h4
    color: rgba(255,255,255,1)

  @media (max-width: 768px) 
    flex-direction: column
  

  &__title
    text-shadow: 0 0 10px #fff, 0 0 20px #FF1177, 0 0 25px #FF1177
  &__date
    color: rgba(0, 0, 0, 0.5)
    font-style: italic
  &__logo
    background-color: red;
    width: 50px
    height: 50px
    border-radius: 10px
    margin-right: 15px
    object-fit: cover;
  &__logo-container
    min-width: 65px
    display: flex
    justify-content: center
    margin-bottom: 10px
</style>