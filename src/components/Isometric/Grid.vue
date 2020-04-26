<template>
    <div class="isometric"></div>
</template>

<script>
export default {

}
</script>

<style>

.isometric {
  background-color: hsla(0, 0%, 0%, 0);
  background-image: -webkit-linear-gradient(
      hsla(100, 100%, 100%, 0.1) 2.5%,
      transparent 2.5%,
      transparent 97.5%,
      hsla(100, 100%, 100%, 0.1) 97.5%
    ),
    -webkit-linear-gradient(left, hsla(100, 100%, 100%, 0.1) 2.5%, transparent
          2.5%, transparent 97.5%, hsla(100, 100%, 100%, 0.1) 97.5%);
  background-size: 3em 3em;
  /* box-shadow: 0 0 0 0.1em hsla(0, 0%, 0%, 0.2); */
  height: 300em;
  left: -130%;
  margin: -7.5em;
  padding: 3em;
  position: absolute;
  top: -230%;
  width: 300em;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(-45deg);
}
</style>