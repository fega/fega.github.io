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
  background-color: transparent;
  font-size: 1.3em;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  border-color: rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding:12px 20px;
  margin: 10px;
  &.dark {
    color: rgba(0, 0, 0, 0.8);
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    border-color: rgba(0, 0, 0, 0);
  }
}
</style>
