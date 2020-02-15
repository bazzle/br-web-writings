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
    &__image{
      padding:$text-padding-std*2 0;
      img{
        width:100%;
        height:auto;
        box-shadow:$shadow;
      }
    }
    p, ul, ol, h1, h2, h3, h4, h5, code, hr{
      @include col-std(75%);
    }
    p code{
      margin-left:0;
      width: auto;
    }
    
  }
}
</style>
