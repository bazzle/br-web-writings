<template>
    <article class="article">

      <ArticleHeader :postData="post" />
      <ArticleBody :postData="post" />

      <!--

      <div class="panel">
        <div class="panel__inner panel__inner--padding-shallow nopadding-top">
          <div class="row row--nocols">
            <div class="article__footer">
              <a class="button button--outline" href="/">Back to index</a>
            </div>
          </div>
        </div>
      </div>
      -->
      
  </article>

</template>


<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'
import ArticleHeader from '~/components/ArticleHeader'
import ArticleBody from '~/components/ArticleBody'

const client = createClient()

export default {
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
  components: {
    VueMarkdown,
    ArticleHeader,
    ArticleBody
  }
}
</script>
