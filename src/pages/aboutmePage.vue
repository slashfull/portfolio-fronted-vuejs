<template>
	<div id="container-aboutmePage">
		<!-- <menu-vue></menu-vue> -->

		<div class="container-main">

			<div class="container-left">
				<aside>
					<div class="card-left">
						<div class="card-left-header">
							<div class="card-img">
								<img src="../assets/img/yo_2.jpg" alt="">
							</div>
						</div>
						<div class="card-left-body">
							<p class="title">Diego Alfonso Pacaje Flores</p>
						</div>
					</div>
					<div class="card-left">
						<div class="card-left-header">
							<h4 class="title">Sobre mí</h4>
						</div>
						<div class="card-left-body">
							<ul>
								<p>Soy una persona que se apasiona por el desarrollo 
								de software en sus diversas plataformas. Busco ser creativo
								y autodidacta para seguir mejorando mis habilidades.
								Actualmente me perfecciono en el ámbito web y dispositivos móviles.</p>
							</ul>
						</div>
					</div>
					<!--  -->
					<div class="card-left">
						<div class="card-left-header">
							<h4 class="title">Contacto</h4>
						</div>
						<div class="card-left-body">
							<ul>
								<li><i class="fab fa-linkedin-in"></i>&nbsp; linkedin.com/in/dpacaje</li>
								<li><i class="fas fa-globe"></i>&nbsp; diegoalfonsoweb.com</li>
								<li><i class="fas fa-envelope"></i>&nbsp; daweb@gmail.com</li>
							</ul>
						</div>
					</div>
					<!--  -->
					<div class="card-left">
						<div class="card-left-header">
							<h4 class="title">Hobbies</h4>
						</div>
						<div class="card-left-body">
							<ul>
								<li><i class="far fa-futbol"></i>&nbsp; Deporte</li>
								<li><i class="fas fa-film"></i>&nbsp; Películas</li>
								<li><i class="fas fa-music"></i>&nbsp; Música</li>
							</ul>
						</div>
					</div>
					<!--  -->
				</aside>
			</div>

			<div class="container-right">
				<div class="card-header">
					<div class="card-header-header">
						<div class="image">
							<img src="../assets/img/yo_2.jpg" alt="">
						</div>
					</div>
					<div class="card-header-body">
						<h3 class="text-bold">diego alfonso pacaje flores</h3>
					</div>
				</div>

				<card-simple-vue class="card-aboutme"
				titulo="Sobre Mí"
				descripcion="Soy una persona que se apasiona por el desarrollo 
							de software en sus diversas plataformas. Busco ser creativo
							y autodidacta para seguir mejorando mis habilidades.
							Actualmente me perfecciono en el ámbito web y dispositivos móviles."
				></card-simple-vue>

				<card-simple-vue
				titulo="Experiencia Laboral"
				subtitulo="Práctica Profesional"
				lugar="Universidad de Tarapacá Arica"
				fecha="Julio 2019 - Agosto 2019"
				descripcion="Desarrollo, modificación e implementación de módulos en el ambiente UTAmed de la universidad."
				></card-simple-vue>

				<card-simple-vue
				titulo="Formación"
				subtitulo="Ingeniería Informática"
				lugar="Universidad Tecnológica de Chile INACAP"
				fecha="Marzo 2015 - Diciembre 2018"
				></card-simple-vue>

				<card-skill-vue></card-skill-vue>

				<card-soft-skill-vue
				titulo="habilidades blandas"
				v-bind:softskill="['trabajo en equipo', 'buena organización', 'adaptación al cambio', 'puntualidad', 'creatividad']"
				></card-soft-skill-vue>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default{
		name: "container-aboutmePage",
		mounted(){
			this.refresh();
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
			refresh(){
				window.$(window).scrollTop(0);
			}
		}
	}
</script>

<style>
	#container-aboutmePage{
		display: block;
		height: 100%;
		background-image: url(../assets/img/background2.jpg);
		background-position: center;
		background-size: cover;
		background-attachment: fixed;
		box-sizing: border-box;
	}
	#container-aboutmePage .container-main{
		display: flex;
		margin: 0px auto;
		padding-bottom: 50px;
		max-width: 1366px;
		padding: 20px 20px;
		overflow: hidden;
	}
	#container-aboutmePage .container-main .container-left{
		/*background-color: green;*/
		width: 30%;
		margin: 20px 0px;
		padding: 10px;
		/*padding-top: 150px;*/
		box-sizing: border-box;
	}
	#container-aboutmePage .container-main .container-left aside{
		background-color: rgb(0,21,33);
		border-radius: 5px;
		box-sizing: border-box;
		height: 100%;
		padding: 10px;
	}
	#container-aboutmePage .container-main .container-left aside .card-left{
		/*background-color: white;*/
		/*box-sizing: border-box;*/
		padding: 20px;
		/* font-family: 'Source Sans Pro' !important; */
		margin-bottom: 20px;
		color: white;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-header{
		margin-bottom: 10px;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-header .card-img{
		text-align: center;
		width: 100%;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-header .card-img img{
		width: 120px;
		height: 120px;
		border-radius: 50%;
		border: 5px solid white;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-header .title{
		font-size: 22px;
		text-transform: uppercase;
		letter-spacing: 2px;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-body{
		font-size: 18px;
		padding: 5px 0px;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-body ul{
		list-style: inside;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-body ul li{
		list-style: none;
		margin-top: 8px;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-body p{
		text-align: justify;
	}
	#container-aboutmePage .container-main .container-left aside .card-left .card-left-body .title{
		text-align: center;
		font-size: 25px;
		color: #608496;
	}

	#container-aboutmePage .container-main .container-right{
		/*background-color: red;*/
		width: 70%;
		min-height: 100%;
		padding: 10px;
		box-sizing: border-box;
	}
	#container-aboutmePage .container-main .container-right .card-header{
		background-color: #f0f0f0;
		border-radius: 5px;
		padding: 20px;
		font-family: 'Source Sans Pro';
		margin: 150px 0px 20px 0px;
		display: none;
	}
	#container-aboutmePage .container-main .container-right .card-header .card-header-header{
		height: 80px;
		margin-bottom: 10px;
	}
	#container-aboutmePage .container-main .container-right .card-header .card-header-header .image{
		background-color: white;
		border: 10px solid rgba(0,21,33,0.9);
		border-radius: 175px;
		box-sizing: border-box;
		height: 200px;
		margin: auto;
		overflow: hidden;
		transform: translateY(-125px);
		width: 200px;
	}
	#container-aboutmePage .container-main .container-right .card-header .card-header-header .image img{
		width: 100%;
		object-fit: cover;
	}
	#container-aboutmePage .container-main .container-right .card-header .card-header-body{
		text-align: center;
	}
	#container-aboutmePage .container-main .container-right .card-header .card-header-body h3{
		font-size: 30px;
		text-transform: uppercase;
		letter-spacing: 3px;
	}

	#container-aboutmePage .container-main .container-right .card-aboutme{
		display: none;
	}

	/* Responsive */
	@media (max-width: 1280px){}
	@media (max-width: 960px){
		#container-aboutmePage .container-main .container-left{
			display: none;
		}
		#container-aboutmePage .container-main .container-right{
			width: 90%;
			margin: 0px auto;
		}
		#container-aboutmePage .container-main .container-right .card-header{
			display: block;
			margin-top: 120px;
		}
		#container-aboutmePage .container-main .container-right .card-aboutme{
			display: block;
		}
	}
	@media (max-width: 720px){
		#container-aboutmePage .container-main .container-right{
			width: 100%;
		}
		#container-aboutmePage .container-main .container-right .card-header .card-header-header{
			height: 60px;
			margin-bottom: 10px;
		}
		#container-aboutmePage .container-main .container-right .card-header .card-header-header .image{
			width: 170px;
			height: 170px;
			transform: translateY(-110px);
		}
		#container-aboutmePage .container-main .container-right .card-header .card-header-body h3{
			font-size: 26px;
		}
	}
	@media (max-width: 540px){
		#container-aboutmePage .container-main .container-right .card-header .card-header-header{
			height: 40px;
			margin-bottom: 10px;
		}
		#container-aboutmePage .container-main .container-right .card-header .card-header-header .image{
			width: 150px;
			height: 150px;
			transform: translateY(-100px);
		}
		#container-aboutmePage .container-main .container-right .card-header .card-header-body h3{
			font-size: 22px;
		}
	}
	/* Fin Responsive */
	
</style>