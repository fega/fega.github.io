<template>
  <footer class=".footer">
    <p class="footer__main">Made with ❤️ By Fabian Gutierrez</p>
    <p class="footer__credits">
      <a href="https://iconscout.com/icons/youtube" target="_blank">Youtube Logo Icon</a> by
      <a href="https://iconscout.com/contributors/roundicons-com" target="_blank">Roundicons .com</a>
    </p>
    <p class="footer__credits">
      <a href="https://iconscout.com/icons/github" target="_blank">Github Logo Icon</a> by
      <a href="https://iconscout.com/contributors/roundicons-com" target="_blank">Roundicons .com</a>
    </p>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
footer
  padding: 20px
  border-top: 1px solid gray

.footer
  &__main
    font-size: 1.2em
    text-align: center
    margin-bottom: 100px
  &__credits
    font-size: 0.8em

</style>

<style scoped>
/* .footer {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #000;
  overflow: hidden;
  font-family: cursive;
  perspective: 100vmax;
  
}

.🔳 {
  --grid-color: #ff1ead;
  --grid-weight: 1px;
  --grid-spacing: 5vmax;
  --grid-glow: 10px;
  --grid-glow-color: rgba(255, 30, 173, 0.3); 
  position: relative;
  height: 100vmax;
  width: 100vmax;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30vmin;
  overflow: hidden;
  transform: rotate3d(1, 0, 0, 75deg) translate3d(0, 25%, 0);
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px var(--grid-color), 0 0 35px var(--grid-color), 0 0 40px var(--grid-color), 0 0 50px var(--grid-color), 0 0 75px var(--grid-color);
}

.🔳::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 200%;
  width: 100%;
  background-position:
    50% 50%,
    50% 50%,
    50% 50%,
    50% 50%;
  background-size:
    var(--grid-spacing) var(--grid-spacing),
    var(--grid-spacing) var(--grid-spacing),
    var(--grid-spacing) var(--grid-spacing),
    var(--grid-spacing) var(--grid-spacing);
  background-image:
    repeating-linear-gradient(
      0deg,
      var(--grid-color),
      var(--grid-color) var(--grid-weight),
      transparent var(--grid-weight),
      transparent var(--grid-spacing)
    ),
    repeating-linear-gradient(
      0deg,
      var(--grid-glow-color),
      var(--grid-glow-color) var(--grid-weight),
      transparent calc(var(--grid-weight) + var(--grid-glow)),
      transparent calc(var(--grid-spacing) - var(--grid-glow)),
    var(--grid-glow-color) var(--grid-spacing)
    ),
    repeating-linear-gradient(
      -90deg,
      var(--grid-color),
      var(--grid-color) var(--grid-weight),
      transparent var(--grid-weight),
      transparent var(--grid-spacing)
    ),
    repeating-linear-gradient(
      -90deg,
      var(--grid-glow-color),
      var(--grid-glow-color) var(--grid-weight),
      transparent calc(var(--grid-weight) + var(--grid-glow)),
      transparent calc(var(--grid-spacing) - var(--grid-glow)),
    var(--grid-glow-color) var(--grid-spacing)
    );
  animation: 8s linear infinite 🔲;
}

.🔳::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background:
    linear-gradient(210deg, #000, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0)),
    linear-gradient(150deg, #000, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0));
}

@keyframes 🔲 {
  0% {
    transform: translate(0, -50%);
  }
  100% {
    transform: translate(0, 0);
  }
} */
</style>