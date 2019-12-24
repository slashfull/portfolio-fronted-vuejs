<template>
	<div id="card-simple">
		<div class="card-simple">
			<div class="card-simple-header">
				<h2 class="title text-bold">{{ titulo }}</h2>
			</div>
			<div class="card-simple-body">
				<h3 class="subtitle text-bold">{{ subtitulo }}</h3>
				<span class="place">{{ lugar }}</span>
				<span class="date">{{ fecha }}</span>
				<p class="description">{{ descripcion }}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "card-simple",
		props: [ 'titulo', 'subtitulo', 'lugar', 'fecha', 'descripcion' ],
		mounted(){
			//
		},
		updated: function(){
			//
		},
		data(){
			return{
				//
			}
		},
		methods: {
			nameFunction: function(){
				//
			}
		}
	}
</script>

<style>
	#card-simple .card-simple{
		/*background-color: white;*/
		background-color: #f0f0f0;
		border-radius: 5px;
		padding: 20px;
		font-family: 'Source Sans Pro';
		margin: 20px 0px;
	}
	#card-simple .card-simple .card-simple-header{
		/*background-color: red;*/
		margin-bottom: 10px;
	}
	#card-simple .card-simple .card-simple-header .title{
		font-size: 30px;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	#card-simple .card-simple .card-simple-body{
		/*background-color: red;*/
		font-size: 20px;
	}
	#card-simple .card-simple .card-simple-body .subtitle{
		font-size: 25px;
		margin-bottom: 3px;
	}
	#card-simple .card-simple .card-simple-body .place,
	#card-simple .card-simple .card-simple-body .date{
		font-size: 18px;
		color: #8c8c8c;
	}
	#card-simple .card-simple .card-simple-body .date{
		float: right;
	}
	#card-simple .card-simple .card-simple-body .description{
		color: #072738;
		text-align: justify;
		margin: 5px 0px;
	}

	/* Responsive */
	@media (max-width: 1280px){}
	@media (max-width: 960px){}
	@media (max-width: 720px){
		#card-simple .card-simple .card-simple-header .title{
			font-size: 25px;
		}
		#card-simple .card-simple .card-simple-body .subtitle{
			font-size: 23px;
		}
		#card-simple .card-simple .card-simple-body .date{
			/*font-size: 16px;*/
			display: block;
			float: none;
		}
	}
	@media (max-width: 540px){
		#card-simple .card-simple .card-simple-header .title{
			font-size: 23px;
		}
		#card-simple .card-simple .card-simple-body .subtitle{
			font-size: 20px;
		}
		#card-simple .card-simple .card-simple-body .place,
		#card-simple .card-simple .card-simple-body .date{
			font-size: 16px;
			display: block;
			float: none;
		}
		#card-simple .card-simple .card-simple-body .description{
			font-size: 18px;
		}
	}
	/* Fin Responsive */
</style>