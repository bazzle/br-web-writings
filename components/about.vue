<template>
  <section id="about" class="panel panel--white-darken panel-about">
	<div class="cp about">
    <div class="panel__inner">
      <div class="row">
        <h2 class="sr-only">{{ aboutData.fields.title }}</h2>
        <div class="about__profile">
          <div class="about__profile-pic">
            <img src="" alt="Photo of me">
          </div>
        </div>
        <div class="about__main-body">
          <div class="about__leadin">
            <vue-markdown>{{ aboutData.fields.mainContent }}</vue-markdown>
          </div>
        </div>
        <div class="about__sidebar">
          <div class="about__abilities">
            <h3 class="about__abilities-title">{{ aboutData.fields.aboutListTitle }}</h3>
            <vue-markdown>{{ aboutData.fields.aboutList }}</vue-markdown>
          </div>
        </div>
      </div>
    </div>
	</div>
</section>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  export default {
    name: 'aboutMe',
    props: ['aboutData'],
    components: {
      VueMarkdown
    }
  }
</script>
