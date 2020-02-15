<template>
  <header class="header">
    <div class="panel panel-header">
      <div class="panel__inner panel__inner--nopadding">
        <div class="cp header-main">
          <div class="row">
            <div class="header-main__inner">
              <h2 class="header-main__title">
                <a href="/">Barry Richards &nbsp;/&nbsp; Web Designer</a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BlogHeader',
  props: ['post']
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
	&__title{
		font-weight:$bold;
		flex-grow:1;
		color:$black;
		a{
		}
		span{
			color:$color-dark-gray;
			@include bp-minus($bp1){
				display:none;
			}
		}
	}
	&__menu-button{
		@extend %anchor;
		cursor:pointer;
		font-weight:$bold;
	}
}

</style>
