<template>
  <div>
    <BlogHeader/>
    <main role="main">
      <nuxt/>
    </main>
  </div>
</template>
<script>
import BlogHeader from '~/components/BlogHeader.vue'
export default {
  components: {
    BlogHeader
  }
}
</script>