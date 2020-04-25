<template>
  <a 
    class="button"
    v-on="$listeners"
  ><slot/></a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.button {
  background-color: #ffab00;
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
