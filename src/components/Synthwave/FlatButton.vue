<template>
  <a 
    :class="{ dark }" 
    class="button"
    v-on="$listeners"
  ><slot/></a>
</template>

<script>
export default {
  props: { dark: { type: Boolean, default: false } }
};
</script>

<style lang="scss" scoped>
.button {
  font-family: 'Audiowide';
  background-color: transparent;
  font-size: 1.1em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  // border: solid 1px;
  border-color: rgba(255, 255, 255, 0);
  border-radius: 25px;
  padding:12px 20px;
  margin: 5px;
  box-shadow: 0 0 10px #00f3ff;
  transition: box-shadow 0.3s;

  &.dark {
    color: rgba(0, 0, 0, 0.8);
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:hover {
    box-shadow: 0 0 10px white, 0 0 10px white, 0 0 15px #FF1177, 0 0 20px #FF1177;
    background-color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0);
  }
}
</style>
