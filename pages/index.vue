<template>
  <div>
    <BlogFeed :postFeed="posts" />
    <AboutMe :aboutData="about" />
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import AboutMe from '~/components/AboutMe'
  import BlogFeed from '~/components/BlogFeed'

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
      AboutMe,
      BlogFeed
    }
  }
</script>
