<template>
  <div>
    <HeroSection />
    <section class="v2-section" id="about">
      <Subtitle>About</Subtitle>
      <p
        class="v2-text lax" data-lax-preset="driftFade" ref="t1"
      >I'm a FullStack developer capable to lead projects from start or working in a team for a bigger goal.</p>
      <p class="v2-text lax" data-lax-preset="driftFade" ref="t2">
        As a developer I feel that my mission is never stop learning and applying the industry's best practices.
        For that reason I'm also a IT security specialist and an ISO27001, quality and hard work is my spoken language.
      </p>
      <p class="v2-text lax" data-lax-preset="driftFade" ref="t3">You can contact me at:</p>
      <br />
      <ContactButton />
      <br />
    </section>
    <section class="v2-section" id="codersrank">
      <Subtitle>CodersRank Profile</Subtitle>
      <codersrank-widget ref="t4" data-lax-preset="driftFade" class="lax"  username="fega" badges="3" style=" --header-bg-color: #000; --bg-color: black"></codersrank-widget>
      <br />
    </section>
    <section class="v2-section" id="main-stack">
      <Subtitle>Main Stack</Subtitle>
      <section class="v2-section flex lax" ref="t5" data-lax-preset="driftFade2">
        <main-button v-for="tech in fabian.mainStack" :key="tech.image" color="white">
          <img :src="tech.image" />
          {{ tech.name }}
        </main-button>
      </section>
      <br />
    </section>
    <section class="v2-section" id="other-stack">
      <Subtitle>Experience With:</Subtitle>
      <section class="v2-section flex lax" ref="t6" data-lax-preset="driftFade2">
        <main-button v-for="tech in fabian.otherStack" :key="tech.image" color="white">
          <img :src="tech.image" />
          {{ tech.name }}
        </main-button>
      </section>
    </section>
    <section class="v2-section" id="experience">
      <Subtitle>Profesional experience:</Subtitle>
      <experience-card
        v-for="e in fabian.experience"
        :key="e.description"
        :description="e.description"
        :company="e.company"
        :title="e.title"
        :start="e.start"
        :end="e.end"
        :image="e.image"
      />
    </section>
    <section class="v2-section" id="projects">
      <Subtitle>Profesional Projects:</Subtitle>
      <section class="v2-section flex">
        <ProjectCard
          v-for="project in fabian.professionalProjects"
          :key="project.key"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :buttons="project.buttons"
          :color="project.color"
        />
      </section>
    </section>
    <section class="v2-section" id="contact">
      <Subtitle>Contact:</Subtitle>
      <ContactButton />
    </section>
    <FooterSection />
  </div>
</template>

<script>
import lax from 'lax.js'
import HeroSection from "@/components/Synthwave/Hero";
import Subtitle from "@/components/Synthwave/Subtitle";
import ContactButton from "@/components/Synthwave/Contact";
import MainButton from "@/components/Synthwave/Button";
import ExperienceCard from "@/components/Synthwave/ExperienceCard";
import ProjectCard from "@/components/Synthwave/ProjectCard";
import FooterSection from '@/components/Synthwave/Footer';
import { fabian } from "@/data";
export default {
  layout: "synth",
  components: {
    HeroSection,
    ContactButton,
    MainButton,
    ExperienceCard,
    FooterSection,
    Subtitle,
    ProjectCard
  },
  data() {
    return {
      heroColor: {
        backgroundColor: "#ffab00"
      },
      fabian
    };
  },
  mounted(){
    lax.addElement(this.$refs.t1)
    lax.addElement(this.$refs.t2)
    lax.addElement(this.$refs.t3)
    lax.addElement(this.$refs.t4)
    lax.addElement(this.$refs.t5)
    lax.addElement(this.$refs.t6)
    lax.addElement(this.$refs.t4)
    lax.addElement(this.$refs.t4)
  },
  methods: {
    setColor(ev) {
      this.heroColor.backgroundColor = ev.target.attributes.color.value;
    },
    goTo(url) {
      window.location = url;
    }
  }
};
</script>

<style lang="sass" scoped>
.v2-section
  max-width: 800px
  margin: auto
  margin-bottom: 20px
  @media (max-width: 820px)
    padding-left: 20px
    padding-right: 20px
  &.flex
    display: flex
    flex-wrap: wrap
    margin-bottom: 0px
    justify-content: center
    align-items: center
.v2-text
  color: rgba(255,255,255,0.9)
  margin-bottom: 10px
</style>

<style lang="scss">
.hero {
  // background-color: #ffab00;
  flex-direction: column;
  display: flex;
  justify-content: center;
  color: white;
  transition: background-color 1s;
  padding: 10px;
  padding-top: 6.5em;
  padding-bottom: 5.5em;

  &-title,
  &-subtitle {
    width: auto;
    text-align: center;
    font-weight: 600;
    font-size: 2.5em;
    display: flex;
    flex-direction: column;
  }

  &-title {
    margin: 10px 0px;
  }
  &-subtitle {
    padding: 0em;
    font-size: 1.5em;
    padding-bottom: 0em;
  }
  &-buttons {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  &-title-image {
    align-self: center;
  }
}
.subtitle-section {
  margin: 1.4em auto;
  max-width: 950px;
}
.text-section {
  max-width: 950px;
  margin: auto;
  padding: 20px;
  padding-top: 0px;
  p {
    margin: 15px 0px;
    font-size: 1.3em;
  }
}
.flex-section {
  display: flex;
  max-width: 950px;
  margin: auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .button {
    flex-basis: 2;
    margin: 10px;
  }
  &.column {
    flex-direction: column;
  }
}
.card {
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  }
}
.circle {
  border-radius: 50%;
}
.years-of-experience {
  font-weight: 600;
  font-size: 4.6em;
}
</style>
