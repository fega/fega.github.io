<template>
  <div>
    <script src="https://profile.codersrank.io/widget/widget.js"></script>
    <b-navbar class="navbar">
      <template slot="brand">
        <b-navbar-item>
          <b>Fabian Gutierrez Portfolio</b>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item href="https://stats.uptimerobot.com/81KN1tXDE7">Project's Status</b-navbar-item>
        <b-navbar-item href="#about">About</b-navbar-item>
        <b-navbar-item href="#experience">Experience</b-navbar-item>
        <b-navbar-item href="#projects">Showcase</b-navbar-item>
        <b-navbar-item href="#contact" class="contact-button">Contact</b-navbar-item>
      </template>
    </b-navbar>

    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
import lax from "lax.js";
export default {
  data() {
    return {};
  },
  beforeMount() {
    // lax.setup(); // init
    // lax.addPreset("driftFade", function() {
    //   return {
    //     "data-lax-opacity": "vh 0, (vh*0.9) 0, (vh*0.6) 1, -vh 0",
    //     // "data-lax-translate-x": "vh -50, (vh*0.8) -50, (vh*0.6) 0",
    //     "data-lax-anchor":"self"
    //   };
    // });
    // lax.addPreset("driftFade2", function() {
    //   return {
    //     "data-lax-opacity": "vh 0, (vh*0.6) 0, (vh*0.5) 1",
    //     "data-lax-translate-y": "vh 150, (vh*0.7) 150, (vh*0.5) 0",
    //     "data-lax-anchor":"self"
    //   };
    // });
    // lax.addPreset("driftFade3", function() {
    //   return {
    //     "data-lax-opacity": "vh 0, (vh*0.4) 0, (vh*0.2) 1",
    //     "data-lax-translate-y": "vh 50, (vh*0.4) 50, (vh*0.2) 0",
    //     "data-lax-anchor":"self"
    //   };
    // });
    // lax.addPreset("eager2", function() {
    //   return {
    //     "data-lax-anchor":"self",
    //     "data-lax-translate-y": `(vh) 0, (elh) -20` 
    //   };
    // });
    // const updateLax = () => {
    //   lax.update(window.scrollY);
    //   window.requestAnimationFrame(updateLax);
    // };

    // window.requestAnimationFrame(updateLax);
  }
};
</script>

<style lang="sass" scoped>
.navbar
  background-color: transparent
  margin-bottom: -3.25em
  position: absolute
  width: 100%
.contact-button
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #FF1177, 0 0 20px #FF1177, 0 0 20px #FF1177
</style>

<style lang="sass">
html
  scroll-behavior: smooth !important
  background: black
  // background: url("~assets/cosmos.jpg") bottom right no-repeat;
  // background-image: linear-gradient(#000,#000, #0d3a53)
  // background-attachment: fixed
  // background-size: cover
body
  // backdrop-filter: contrast(2.5)

h1, h2, h3, h4, h5, h6
  font-size: 100%
  font-weight: 700
  font-family: 'Audiowide'

body, button, input, select, textarea
  font-family: 'Lato'
  font-size: 1.1em
  // background-origin: center
  
.navbar
  // backdrop-filter: blur(2px)

.navbar-item, .navbar-link, .navbar-burger
  color: white
  font-family: 'Audiowide'

.navbar-menu.is-active
  background-color: rgba(0,0,0,0.4)
  .navbar-item, .navbar-link
    color: white

a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active
  color: white
  background-color: rgba(0,0,0,0.2)
  transition: all 0.5s
a.navbar-item:hover
  transition: all 0.5s
  color: white
  text-shadow: 0 0 10px #fff,0 0 10px #fff,0 0 10px #fff, 0 0 20px #fff,0 0 25px #fff, 0 0 30px #fff, 0 0 40px #FF1177,0 0 35px #FF1177, 0 0 70px #FF1177, 0 0 100px #FF1177
</style>