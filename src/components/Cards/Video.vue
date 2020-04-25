<template>
  <div 
    :style="{background:image?`url(${image}) no-repeat center center`:null}"
    class="nomada-bulma-video-card" >
    <img 
      v-if="icon"
      :src="icon" 
      class="nomada-bulma-video-card-image"
      alt="play video">
    <p>
      <slot/>  
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "/icons/play-button.svg"
    },
    image: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.nomada-bulma-video-card {
  height: 170px;
  width: 270px;
  display: flex;
  position: relative;
  margin: 10px;
  // flex-direction: row-reverse;
  justify-content: end;

  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.5s;
  padding: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: $main-color;
  &-image {
    position: absolute;
    width: 60px;
    left: calc(50% - 30px);
    transform: translateY(45px);
  }
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
  p {
    color: white;
    font-weight: 600;
    font-size: 1.3em;
    align-self: flex-end;
    text-shadow: 0 3px 20px rgba(0, 0, 0, 0.3), 0 3px 20px rgba(0, 0, 0, 0.3);
  }
}
</style>
