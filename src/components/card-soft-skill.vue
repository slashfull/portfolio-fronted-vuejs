<template>
	<div id="card-soft-skill">
		<div class="card-soft-skill">
			<div class="card-soft-skill-header">
				<h2 class="title text-bold">{{ titulo }}</h2>
			</div>
			<div class="card-soft-skill-body">
				<ul v-for="skill in softskill">
					<li><i class="fas fa-check success"></i> &nbsp; {{ skill }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "card-soft-skill",
		props: {
			titulo: String,
			softskill: Array
		},
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
			//
		}
	}
</script>

<style>
	#card-soft-skill .card-soft-skill{
		background-color: #f0f0f0;
		border-radius: 5px;
		padding: 20px;
		font-family: 'Source Sans Pro';
		margin: 20px 0px;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-header{
		margin-bottom: 20px;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-header .title{
		font-size: 30px;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-body{
		font-size: 20px;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-body ul{
		list-style: inside;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-body ul li{
		list-style: none;
		color: rgb(0,21,33);
		display: flex;
		/*line-height: 1;*/
		margin-bottom: 5px;
		text-transform: capitalize;
	}
	#card-soft-skill .card-soft-skill .card-soft-skill-body ul li .success{
		color: rgb(0,21,33);
		border: 2px solid rgb(0,21,33);
		font-size: 15px;
		border-radius: 3px;
		padding: 2px;
	}

	/* Responsive */
	@media (max-width: 1280px){}
	@media (max-width: 960px){}
	@media (max-width: 720px){
		#card-soft-skill .card-soft-skill .card-soft-skill-header .title{
			font-size: 25px;
		}
	}
	@media (max-width: 540px){
		#card-soft-skill .card-soft-skill .card-soft-skill-header .title{
			font-size: 23px;
		}
	}
	/* Fin Responsive */
</style>