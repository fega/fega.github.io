<template>
  <div style="max-width:300px; padding:10px;">
    <div class="card">
      <div class="card-image">
        <figure class="image">
          <img :src="image" style="width:280px; height: 280px; object-fit: cover" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4" style="margin:0px">{{title}}</p>
            <p class="subtitle is-6" style="margin:0px; height: 60px">{{description}}</p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <a v-if="buttons.url" :href="buttons.url" target="_blank" class="card-footer-item">See</a>
        <a v-if="buttons.video" :href="buttons.video" target="_blank" class="card-footer-item">Video</a>
        <a v-if="buttons.appStore" :href="buttons.appStore" target="_blank" class="card-footer-item">App Store</a>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      default: "https://bulma.io/images/placeholders/1280x960.png",
      type: String
    },
    title: {
      type: String
    },
    roles: {
      type: Array
    },
    description: {
      type: String
    },
    video: {
      type: String
    },
    buttons: {
      default: () => ({})
    }
  }
};
</script>

<style>
</style>
