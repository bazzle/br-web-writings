<template>
  <div>
    <blogHeader></blogHeader>
    <!-- render data of the person -->
    <!-- render blog posts -->
    <section class="body-container">
      <ul class="items-list wrapper">
        <li class="item" v-for="post in posts" :key="post.id">
          <article-preview :post="post"></article-preview>
        </li>
      </ul>
    </section>
    <vue-markdown>{{ about.fields.aboutList }}</vue-markdown>
    <aboutMe :aboutData="about" ></aboutMe>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import blogHeader from '~/components/header.vue'
  import ArticlePreview from '~/components/article-preview.vue'
  import aboutMe from '~/components/about.vue'

  const client = createClient()

  export default {
    asyncData ({env}) {
      return Promise.all([
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        }),
        client.getEntries({
          'content_type': env.CTF_ABOUT_TYPE_ID
        })
      ]).then(([posts, about]) => {
        return {
          posts:posts.items,
          about:about.items[0]
        }
      }).catch(console.error)
    },
    components: {
      ArticlePreview,
      blogHeader,
      aboutMe
    }
  }
</script>
