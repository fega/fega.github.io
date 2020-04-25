<template>
  <div class="nomadas-bulma-feature" >
    <h3>{{ title }}</h3>
    <img :src="image">
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    description: {
      type: String,
      default: null
    },
    image: {
      type: String,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
.nomadas-bulma-feature {
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  padding: 10px;
  img {
    width: 40%;
    padding: 10px;
  }
  h3 {
    font-size: 1.3em;
    font-weight: 600;
  }
  p {
    padding: 10px;
    text-align: center;
  }
}
</style>
