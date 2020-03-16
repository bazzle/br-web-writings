<template>
  <div>
  <no-ssr>
    <a v-if="scrolling === false" href="#" class="backtop trigger-backtop" role="button">
      <span>Back to top</span>
      <icon-base width="20" height="20" viewBox="0 0 96 66" icon-name="Arrow"><icon-Arrow /></icon-base>
    </a>
  </no-ssr>
  </div>
</template>
<script>
import iconBase from '@/components/icons/iconBase'
import iconArrow from '@/components/icons/iconArrow'
export default {
  name: "BackTop",
  data: function(){
    return{
      scrolling: false
    }
  },
  components: {
    iconBase,
    iconArrow
  },
  methods: {
    checkScroll(){
      this.scrolling = true
      // Set a timeout to run after scrolling ends
      let isScrolling = setTimeout(function() {
        console.log('stop');
        this.scrolling = false
      }, 1000);
    }
  },
  mounted() {
    document.addEventListener('scroll', this.checkScroll);
  },
  destroyed() {
    document.removeEventListener('scroll', this.checkScroll);
  }
}
</script>
<style lang="scss" scoped>
// back to top button
.backtop {
    position: fixed;
    bottom:-1px;
    right:20px;
    .dark-mode &{
      color:$white;
    }
    @keyframes fadeout{
        from{
            opacity:1;
        }
        to{
            opacity:0;
        }
    }
    @keyframes fadein{
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    &.fadeout{
        animation: fadeout .5s;
        animation-fill-mode:forwards;
    }
    &.fadein{
        animation: fadein .5s;
        animation-fill-mode:forwards;
    }
    padding:1em 1.7em;
    @include align-center;
    span {
      font-size: $font-size-small;
        @include link-styled;
        display:inline-block;
        padding: 1em;
        @include transition;
    }
}
</style>