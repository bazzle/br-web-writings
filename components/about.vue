<template>
  <section id="about" class="panel panel--white-darken panel-about">
	<div class="cp about">
    <div class="panel__inner">
      <div class="row">
        <h2 class="sr-only">{{ aboutData.fields.title }}</h2>
        <div class="about__profile">
          <div class="about__profile-pic">
            <img :src="aboutData.fields.profilePhoto.fields.file.url" alt="Photo of me">
          </div>
        </div>
        <div class="about__main-body">
          <div class="about__leadin">
            <p>
              {{ aboutData.fields.mainContent }}
            </p>
          </div>
          <div class="about__content">
            <p>
              {{ aboutData.fields.mainContent2 }}
            </p>
          </div>
        </div>
        <div class="about__sidebar">
          <div class="about__abilities">
            <h3 class="about__abilities-title">{{ aboutData.fields.aboutListTitle }}</h3>
            <ul>
              <li v-bind:key="listItem.id" v-for="listItem in aboutData.fields.list">
                {{listItem}}
              </li>
            </ul>
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
	&__main-body{
		width:100%;
		padding-right:0;
		@include bp($bp2){
			width:calc(50% - #{$grid-space});
			padding-right:5%;
		}
	}
	&__leadin{
		p{
        font-weight: $std;
        font-size: 2.3rem;

        //line-height:1.2;
        @include bp($bp2) {
            font-weight: $thin;
            font-size: 3rem;
            line-height: 1.2;
        }
    }
		padding-bottom:$text-padding-std;
	}
	&__content{
		@include text-body;
		padding-bottom:$text-padding-std;
	}
	&__profile{
		width:100%;
		@include align-center-top;
		@include bp($bp1){
			width:25%;
		}
	}
	&__profile-pic{
		@include bp-minus($bp1){
			padding-top:$text-padding-std;
			padding-bottom:$text-padding-std*2;
		}
		img{
			width:100%;
			max-width:200px;
			height:auto;
			border-radius:50%;
		}
	}
	&__links{
		padding:$text-padding-std 0;
		@include bp-minus($bp1){
		}
		a{
			@include link-styled;
			@include bp-minus($bp1){
				display:block;
				padding-bottom:.5em;
			}
			&:last-of-type{
				padding-bottom:0;
			}
		}
		span{
			padding:0 1em;
			color:$black-lighten;
			text-decoration:none;
			@include bp-minus($bp1){
				display:none;
			}
		}
	}
	&__sidebar{
		width:100%;
		@include bp($bp2){
			width:25%;
			padding-left:$grid-space;
		}
	}
	&__abilities{
		@include bp-minus($bp1){
			padding-left:0;
			width:100%;
		}
		ul{
			@include text-body;
			padding-bottom:$text-padding-std;
		}
	}
	&__abilities-title{
		@include text-title;
		margin-bottom:$text-padding-std;
	}
	&__readmore{
	}
	&__more{
		opacity:0;
		height:0;
		overflow:hidden;
		transition:all, .6s;
		&.js-show{
			opacity:1;
			height:auto;
		}
	}
	&__quote{
		@include text-leadin;
		position:relative;
		width:100%;
		opacity:0;
		height:0;
		span{
			width:100%;
			display:block;
			//@include text-underline($color-brand);
		}
		@include bp-minus($bp1){
			display:none;
		}
		transition:all, .6s;
		&.js-show{
			opacity:1;
			height:auto;
		}
	}
	&__quotemark{
		position:absolute;
		top:-.2em;
		left:-52px;
		color:$color-brand;
		font-size:4em;
		padding-right:.2em;
		font-family:georgia, serif;
		display:inline-block;
	}
}
</style>
