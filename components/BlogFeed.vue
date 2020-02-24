<template>

  <div class="panel">
    <div class="panel__inner nopadding-top">
      <div class="row row--nocols">
        <div class="post-index">
          <div class="post-index__item" v-for="post in postFeed" :key="post.id" >
            <ArticlePreview :postItem="post" />
          </div>
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
    min-height:100vh;
    padding-top:$text-padding-std*3;
    &__item{
      padding-top:$text-padding-std*2;
      @include bp-minus($bp1){
        padding-top:$text-padding-std;
      }
      &:first-of-type{
        padding-top: 0;
      }
    }
  }
</style>
