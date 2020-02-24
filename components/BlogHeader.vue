<template>
  <header class="header" id="top">
    <div class="panel panel-header">
      <div class="panel__inner panel__inner--nopadding">
        <div class="cp header-main">
          <div class="row">
            <div class="header-main__inner">
              <h2 class="header-main__title">
                <nuxt-link to="/">Barry Richards</nuxt-link> &nbsp;/&nbsp; Web Designer
              </h2>
							<button class="button--stripped header-main__dm-switch" @click="$emit('darkMode')" title="Dark mode toggle">
								<span>{{ this.$parent.darkMode ? "Light" : "Dark" }} mode</span>
								<icon-base width="20" height="20" viewBox="0 0 28 28" icon-name="DarkMode"><icon-DarkMode /></icon-base>
							</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import iconBase from '@/components/icons/iconBase'
import iconDarkMode from '@/components/icons/iconDarkMode'
export default {
  name: 'BlogHeader',
	props: ['post'],
	components: {
		iconBase,
		iconDarkMode
	}
}
</script>
<style lang="scss" scoped>

.header{
	position:fixed;
	top:0;
	left:0;
	z-index:10;
	height:$header-height;
	width:100%;
	@include bp-minus($bp1){
		position:fixed;
		width:100%;
		top:0;
		left:0;
		background-color:$white;
		z-index:10;
	}
}

.header-main{
	&__inner{
		height:$header-height;
		@include align-left;
		width:100%;
		@include bp($bp1){
			border-top:12px solid $color-brand;
		}
	}
	&__dm-switch{
		font-weight: $chunky;
		display:flex;
		align-items: center;
		font-size:$font-size-small;
		@include bp-minus($bp1){
			font-size:$font-size-small;
		}
		span{
			display:block;
			padding:1em;
			@include bp-minus($bp1){
				display: none;
			}
		}
	}
	&__title{
		font-weight:$bold;
		flex-grow:1;
		font-size:$font-size-small;
		@include bp-minus($bp1){
			font-size:$font-size-small;
		}
	}
	&__menu-button{
		@extend %anchor;
		cursor:pointer;
		font-weight:$bold;
	}
}

</style>
