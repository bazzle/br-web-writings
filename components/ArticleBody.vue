<template>
  <div class="panel">
    <div class="panel__inner panel__inner--padding-shallow">
      <div class="row row--nocols">
        <div class="article__content">
          <vue-markdown>{{ postData.fields.body }}</vue-markdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
	name: "ArticleContent",
  props: ['postData'],
  components: {
    VueMarkdown
  }
}
</script>
<style lang="scss">
.article{
  &__content{
    @include text-body;
    @include col-std(auto);
    &__image{
      padding:$text-padding-std*2 0;
      img{
        width:100%;
        height:auto;
        box-shadow:$shadow;
      }
    }
    p code{
      margin-left:0;
      width: auto;
    }
    
  }
}
</style>
