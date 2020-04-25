<template>
  <div :style="heroColor" class="hero">
    <div class="hero-backdrop">
      <div class="hero-subtitle">I'm Fabian Gutierrez.</div>
      <div class="hero-title">Node.js FullStack Developer</div>
      <div class="hero-subtitle">IT Security Specialist, ISO27001 internal auditor .</div>
      <div class="hero-buttons">
        <flat-button
          class="button"
          color="#2196f3"
          @mouseover="setColor"
          @click="goTo('https://github.com/fega')"
        >GitHub</flat-button>
        <flat-button
          color="#5e35b1"
          class="button"
          @mouseover="setColor"
          @goTo="goTo('https://www.linkedin.com/in/fabiangutierreza/')"
        >LinkedIn</flat-button>
        <flat-button color="#c62828" class="button" @mouseover="setColor">Youtube</flat-button>
      </div>
    </div>
  </div>
</template>

<script>
import FlatButton from "@/components/Basic/FlatButton";

export default {
  components: { FlatButton },
  data() {
    return {
      heroColor: {
        backgroundColor: "rgba(0,0,0,0)"
      }
    };
  },
  methods: {
    setColor(ev) {
      console.log(ev.target.attributes.color.value);
      this.heroColor.backgroundColor = ev.target.attributes.color.value;
    },
    goTo(url) {
      window.location = url;
    }
  }
};
</script>

<style>
.hero {
  background-image: url("~assets/code.jpg");
  background-blend-mode: luminosity;
  display: flex;
  align-items: center;
}
.hero-backdrop{
  background-color: rgba(0,0,0,0.1);
  backdrop-filter: blur(5px);
  padding: 40px;
  border-radius:15px;
}
</style>