<template>
  <a 
    :class="{ dark }" 
    :style="style"
    class="button"
    v-on="$listeners"
  ><slot/></a>
</template>

<script>
export default {
  props: {
    color: { type: String, default: "white" }
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
.button {
  background-color: transparent;
  font-size: 1.3em;
  // color: rgba(0, 0, 0, 0.8);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  transition: box-shadow 0.5s;
  padding: 12px;
  padding-left: 12px;
  padding-right: 17px;
  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
  img {
    height: 21px;
    margin-right: 7px;
  }
}
</style>
