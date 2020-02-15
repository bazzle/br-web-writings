<template>
  <div class="article-preview">
    <div class="article-preview__inner">
      <h2 class="article-preview__title"><a :href="postItem.fields.slug">{{postItem.fields.title}}</a></h2>
      <p class="article-preview__meta"><span>{{ postItem.fields.publishDate | formatDate }}</span> in <span>{{postItem.fields.category}}</span></p>
      <div class="article-preview__excerpt">
        <p>{{postItem.fields.description}}</p>
      </div>
      <a class="button button--outline" :href="postItem.fields.slug">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['postItem']
}
</script>
<style lang="scss">
  .article-preview{
    &__inner{
      @include col-std(75%);
      padding-bottom:$text-padding-std*2;
    }
    &__title{
      @include text-title-item;
      margin-bottom:$text-padding-std;
    }
    &__meta{
      margin-bottom:$text-padding-std;
      span{
        color:$color-brand;
        font-weight:$bold;
      }
    }
    &__excerpt{
      @include text-body;
      margin-bottom:$text-padding-std;
    }
    &:first-of-type{
      padding-top:$text-padding-std*2;
    }
  }
</style>
