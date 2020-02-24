<template>
  <div :class="darkMode === true ? 'dark-mode' : 'light-mode'" id="pageTop">
    <BlogHeader v-on:darkMode = "darkModeUpdate" />
    <main role="main">
      <nuxt/>
    </main>
    <BackTop />
  </div>
</template>
<script>
import BlogHeader from '~/components/BlogHeader.vue'
import BackTop from '~/components/BackTop.vue'
export default {
  data(){
    return{
      darkMode: true
    }
  },
  methods: {
    darkModeUpdate: function(){
      this.darkMode === true ? this.darkMode = false : this.darkMode = true
    }
  },
  components: {
    BlogHeader,
    BackTop
  }
}
</script>