<template>
  <div>
    <BlogFeed :postFeed="posts" ></BlogFeed>
    <aboutMe :aboutData="about" ></aboutMe>
  </div>
</template>

<script>
  import {createClient} from '~/plugins/contentful.js'
  import aboutMe from '~/components/about'
  import BlogFeed from '~/components/blogFeed'

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
      aboutMe,
      BlogFeed
    }
  }
</script>
