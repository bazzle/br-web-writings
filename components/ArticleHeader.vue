<template>
	<header class="article__header panel panel--white-darken">
			<div class="panel__inner panel__inner--padding-shallow">
				<div class="row row--nocols">
					<div class="article__header__inner">
						<h2 class="article__header__title"><span>{{this.postData.fields.title}}</span></h2>
						<p class="article__header__meta"><span>{{ this.postData.fields.publishDate | formatDate }}</span> in <span>{{ this.postData.fields.category }}</span></p>
						<div class="article__header__excerpt">
              <p>
							  {{ this.postData.fields.description }}
              </p>
						</div>
					</div>
				</div>
			</div>
	</header>
</template>
<script>
export default {
	name: "ArticleHeader",
  props: ['postData']
}
</script>
<style lang="scss" scoped>
.article{
  &__header{
    &__inner{
      @include col-std(75%);
    }
    &__title{
      @include text-title-pagehead;
      margin-bottom:$text-padding-std;
      @include bp($bp2){
        margin-bottom:$text-padding-std*2;
      }
    }
    &__meta{
      font-size:$font-size-small;
      margin-bottom:$text-padding-std;
      span{
        font-weight:$bold;
      }
      @include bp($bp2){
        margin-bottom:$text-padding-std*2;
      }
        
    }
    &__excerpt{
      @include text-leadin;
    }
  }
}
</style>
