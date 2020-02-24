<template>
  <div class="article-preview">
    <div class="article-preview__inner">
      <h2 class="article-preview__title"><nuxt-link :to="postItem.fields.slug">{{postItem.fields.title}}</nuxt-link></h2>
      <p class="article-preview__meta"><span>{{ postItem.fields.publishDate | formatDate }}</span> in <span>{{postItem.fields.category}}</span></p>
      <div class="article-preview__excerpt">
        <p>{{postItem.fields.description}}</p>
      </div>
      <nuxt-link :to="postItem.fields.slug" class="button button--outline">Read more</nuxt-link>
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
      font-size: $font-size-small;
      span{
        font-weight:$bold;
      }
    }
    &__excerpt{
      @include text-body;
      margin-bottom:$text-padding-std;
    }
  }
</style>
