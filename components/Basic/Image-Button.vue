<template>
  <a 
    :class="{ dark }" 
    :style="style"
    class="nomada-vue-image-button"
    v-on="$listeners"
  >
    <img :src="image">
    <slot/>
  </a>
</template>

<script>
export default {
  props: {
    color: { type: String, default: "white" },
    image: { type: String, default: null }
  },
  data() {
    return {
      style: {
        backgroundColor: this.color
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.nomada-vue-image-button {
  background-color: transparent;
  font-size: 1.3em;
  // color: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 25px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    height: 21px;
    margin-right: 7px;
  }
}
</style>
