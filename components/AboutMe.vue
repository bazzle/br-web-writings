<template>
  <section id="about" class="panel panel--white-darken panel-about">
	<div class="cp about">
    <div class="panel__inner about__inner">
      <div class="row">
        <h2 class="sr-only">{{ aboutData.fields.title }}</h2>
				<div class="about__maintext">
						<h3 class="about__title">
							Here you will find
						</h3>
						<p>
							{{ aboutData.fields.mainContent }}
						</p>
				</div>
				<div class="about__profile">
					<h3 class="about__title">
						A little about me
					</h3>
						<div class="about__profile__content">
							<p>
								{{ aboutData.fields.mainContent2 }}
							</p>
						</div>
				</div>
      </div>
    </div>
	</div>
</section>
</template>
<script>
  import MarkdownText from '~/components/MarkdownText'
  export default {
    name: 'aboutMe',
    props: ['aboutData'],
    components: {
      MarkdownText
    }
  }
</script>





<style lang="scss" scoped>
.about{
	&__title{
		font-weight:$bold;
		margin-bottom:$text-padding-std;
		border-bottom:2px solid $color-brand;
		display: inline-block;
		font-size:$font-size-small;
	}
	&__maintext{
		@include bp($bp2){
			padding-left:$grid-space;
			padding-right:$grid-space*2;
			width:60%;
		}
		p{
			font-weight: $std;
			font-size: 3rem;
			padding-bottom:$text-padding-std;
			font-weight: $chunky;
			line-height: 1.2;
			@include bp($bp2) {
				line-height: 1;
				font-size: 6rem;
				max-width: 800px;
			}
		}
	}
	&__profile{
		@include bp($bp2){
			padding-left:$grid-space;
			padding-right:$grid-space;
			width:40%;
		}
		&__content{
			@include text-body;
			padding-bottom:$text-padding-std;
			@include bp($bp2){
				padding-right:$grid-space;
				p{
					font-size:$font-size-small;
					&:first-of-type {
						margin-top: 0;
					}
				}
			}
		}
	}
}
</style>
