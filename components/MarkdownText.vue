<template>
  <div class="markdown">
    <vue-markdown>{{ this.text }}</vue-markdown>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'MarkdownText',
  props: ['text'],
  components: {
    VueMarkdown
  }
}
</script>
<style lang="scss"  scoped>
.markdown{
    font-size: 2.2rem;
    font-weight: $thin;

    strong {
        font-weight: $bold;
    }

    h1, h2, h3, h4, h5 {
        @include text-title;
        margin-bottom:$text-padding-std;
    }

    p, ol, ul {
        padding: 0;
        margin: 0;
        margin-bottom: $text-padding-std;
    }

    ul {
        box-sizing: border-box;
    }

    li {
        list-style: none;
        position: relative;
        display: flex;
        align-items: baseline;

        &:before {
            margin-right: .5em;
            content: '';
            display: block;
            width: 5px;
            height: 5px;
            background-color: $color-brand;
            flex-shrink: 0;
            position: relative;
            top: -3px;
        }
    }

    & > *:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
    }
}
</style>