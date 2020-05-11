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
export default {
  data() {
    return {};
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
  text-shadow: 0 0 10px red,0 0 10px red,0 0 10px red, 0 0 20px red, 0 0 30px #fff, 0 0 40px white,0 0 35px #FF1177, 0 0 70px #FF1177, 0 0 100px #FF1177

</style>

<style lang="sass">
h1, h2, h3, h4, h5, h6
  font-size: 100%
  font-weight: 700

body, button, input, select, textarea
  font-family: 'Audiowide'
html
  background: black
.navbar
  backdrop-filter: blur(2px)

.navbar-item, .navbar-link, .navbar-burger
  color: white
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