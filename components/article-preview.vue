<template>
  <article>
    <time class="tiny date">{{ ( new Date(post.fields.publishDate)).toDateString() }}</time>
    <h4><nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">{{ post.fields.title }}</nuxt-link></h4>
    <p>{{ post.fields.description }}</p>
    <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.fields.slug }}" class="title">Read more</nuxt-link>
    <div class="tags">
      {{ post.fields.category }}
    </div>
  </article>
</template>

<script>
export default {
  name: 'ArticlePreview',
  props: ['post']
}
</script>

<style>
  .thumbnail {
    margin-bottom: 1em;
  }

  .date {
  }

  .title {
    text-decoration: none;
    font-size: 22px;
    color: #373F49;
  }

  .tags {
    padding : 1em 0;
    margin-bottom: 2em;
  }

  .tag:link,
  .tag:visited {
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  }

  .tag:active,
  .tag:hover,
  .tag:focus {
    color: #606060;
    border-color: #606060;
  }
</style>
