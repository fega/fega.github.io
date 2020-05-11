<template>
  <div>
    <HeroSection />
    <section class="v2-section" id="about">
      <Subtitle>About</Subtitle>
      <p
        class="v2-text"
      >I'm a FullStack developer capable to lead projects from start or working in a team for a bigger goal.</p>
      <p class="v2-text">
        As a developer I feel that my mission is never stop learning and applying the industry's best practices.
        For that reason I'm also a IT security specialist and an ISO27001, quality and hard work is my spoken language.
      </p>
      <p class="v2-text">You can contact me at:</p>
      <br />
      <ContactButton />
      <br />
    </section>
    <section class="v2-section" id="codersrank">
      <Subtitle>CodersRank Profile</Subtitle>
      <codersrank-widget username="fega" badges="3" style=" --header-bg-color: #222"></codersrank-widget>
      <br />
    </section>
    <section class="v2-section" id="main-stack">
      <Subtitle>Main Stack</Subtitle>
      <section class="v2-section flex">
        <main-button v-for="tech in fabian.mainStack" :key="tech.image" color="white">
          <img :src="tech.image" />
          {{ tech.name }}
        </main-button>
      </section>
      <br />
    </section>
    <section class="v2-section" id="other-stack">
      <Subtitle>Experience With:</Subtitle>
      <section class="v2-section flex">
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
  <!-- <div>
    <HeroSection />
    <div class="subtitle-section" id="about">
      <sub-title>About me</sub-title>
    </div>
    <div class="text-section">
      <p>I'm a FullStack developer capable to lead projects from start or working in a team for a bigger goal.</p>
      <p>
        As a developer I feel that my mission is never stop learning and applying the industry's best practices.
        For that reason I'm also a IT security specialist and an ISO27001, quality and hard work is my spoken language.
      </p>
      <p>
        You can contact me at:
      </p>
      <br>
      <div class="flex-section">
        <ContactButton />
      </div>
    </div>
    <div class="subtitle-section">
      <sub-title>CodersRank Profile</sub-title>
    </div>
    <div class="text-section">
      <codersrank-widget username="fega" badges="3" style=" --header-bg-color: #222"></codersrank-widget>
    </div>

    <div class="subtitle-section">
      <sub-title>My main stack</sub-title>
    </div>
    <div class="flex-section">
      <main-button v-for="tech in fabian.mainStack" :key="tech.image" color="white">
        <img :src="tech.image" />
        {{ tech.name }}
      </main-button>
    </div>
    <div class="subtitle-section">
      <sub-title>Experience with:</sub-title>
    </div>
    <div class="flex-section">
      <main-button v-for="tech in fabian.otherStack" :key="tech.image" color="white">
        <img :src="tech.image" />
        {{ tech.name }}
      </main-button>
    </div>
    <div class="subtitle-section" id="experience">
      <sub-title>Node.js Professional Experience:</sub-title>
    </div>
    <div class="flex-section column">
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
    </div>
    <div class="subtitle-section" id="projects">
      <sub-title>Profesional Projects</sub-title>
    </div>
    <div class="text-section">
      <p>Some of my professional work:</p>
      <div style="display: flex; flex-wrap: wrap">

      <ProjectCard 
        v-for="project in fabian.professionalProjects" 
        :key="project.key"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :buttons="project.buttons"/>
      </div>
    </div>
    <div class="subtitle-section" id="contact">
      <sub-title>Contact</sub-title>
    </div>
    <div class="flex-section">
      <ContactButton />
    </div>
    <AppFooter />
  </div>-->
</template>

<script>
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

<style lang="sass" scoped>
.v2-section
  max-width: 800px
  margin: auto
  margin-bottom: 20px
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
    & .button {
      width: 150px;
    }
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
