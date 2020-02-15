<template>

  <div class="post-index panel">
    <div class="panel__inner nopadding-top">
      <div class="row row--nocols">
        <div class="post-index__item" v-for="post in postFeed" :key="post.id" >
          <ArticlePreview :postItem="post" />
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import VueMarkdown from 'vue-markdown'
import ArticlePreview from '~/components/ArticlePreview'
export default {
  name: "BlogFeed",
  props: ['postFeed'],
  components: {
    VueMarkdown,
    ArticlePreview
  }
}
</script>
<style lang="scss" scoped>
  .post-index{
    min-height:70vh;
  }
</style>
