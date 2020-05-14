<template>
  <a :style="style" class="button" v-on="$listeners">
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    // color: { type: String, default: "black" },
    dark: { type: Boolean }
  },
  data() {
    return {
      style: {
        backgroundColor: this.color || "rgba(0,0,0,0.5)"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 1.1em;
  // color: rgba(0, 0, 0, 0.8);
  cursor: default;
  border: none;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s;
  padding: 12px;
  padding-left: 12px;
  padding-right: 17px;
  box-shadow: 0 0 5px white, 0 0 5px #00f3ff;
  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 13px;
    font-size: 0.8em;
  }
  &:hover {
    box-shadow: 0 0 10px white, 0 0 10px white, 0 0 15px #ff1177,
      0 0 20px #ff1177;
  }
  img {
    height: 21px;
    margin-right: 7px;
  }
}
</style>
