<template>
	<section id="container-last-projects">
		<div class="container">
			<div class="container-title">
				<h2 class="titulo">ÚLTIMOS PROYECTOS</h2>
			</div>
			<div class="container-project">
				<div class="card-projects">
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/3.jpg" alt="">
						</div>
						<div class="project-description">
							<p class="title"><router-link class="link" to="/">Nombre Proyecto</router-link></p>
							<p class="description">Lorem ipsum dolor sit 
							amet, consectetur adipisicing elit. Delectus, 
							possimus inventore quis quasi tempora sint?</p>
						</div>
					</div>
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/4.jpg" alt="">
						</div>
						<div class="project-description">
							<p class="title"><router-link class="link" to="/">Nombre Proyecto</router-link></p>
							<p class="description">Lorem ipsum dolor sit 
							amet, consectetur adipisicing elit. Delectus, 
							possimus inventore quis quasi tempora sint?</p>
						</div>
					</div>
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/7.jpg" alt="">
						</div>
						<div class="project-description">
							<p class="title"><router-link class="link" to="/">Nombre Proyecto</router-link></p>
							<p class="description">Lorem ipsum dolor sit 
							amet, consectetur adipisicing elit. Delectus, 
							possimus inventore quis quasi tempora sint?</p>
						</div>
					</div>
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/2.jpg" alt="">
						</div>
						<div class="project-description">
							<p class="title"><router-link class="link" to="/">Nombre Proyecto</router-link></p>
							<p class="description">Lorem ipsum dolor sit 
							amet, consectetur adipisicing elit. Delectus, 
							possimus inventore quis quasi tempora sint?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default{
		name: "container-last-projects",
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
			viewProject: function(){
				var card = document.getElementById("modal-card");
				if (card.style.display === "block") {
					card.style.display = "none";
				} else {
					card.style.display = "block";
				}
			},
			closeProject: function(){
				var card = document.getElementById("modal-card");
				card.style.display = "none";
			}
		}
	}
</script>

<style>
	section#container-last-projects{
		display: inline-block;
		width: 100%;
		background-color: #001521;
		margin-top: 100px;
	}
	section#container-last-projects .container{
		max-width: 1000px;
		/*width: 90%;*/
	}
	section#container-last-projects .container .container-title{
		text-align: center;
		margin-bottom: 40px;
		color: white; /* Editado */
	}
	section#container-last-projects .container .container-title .titulo{
		letter-spacing: 5px;
	}


	/* Inicio estilos de Project */
	section#container-last-projects .container .card-projects{
		margin: 50px 0px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 20px;
	}
	section#container-last-projects .container .card-projects .project{
		background-color: #f7f7f7;
		/*background-color: red;*/
		transition: all 1s;
		box-sizing: border-box;
		overflow: hidden;
	}
	section#container-last-projects .container .card-projects .project:hover{
		box-shadow: 0px 0px 7px 2px #6e6e6e;
		transform: scale(1.1);
	}
	section#container-last-projects .container .card-projects .project .project-image{
		box-sizing: border-box;
		height: 200px;
	}
	section#container-last-projects .container .card-projects .project .project-image img{
		width: 100%;
		height: 100%;
		object-fit: cover;
		/*z-index: 10000;*/
	}
	section#container-last-projects .container .card-projects .project .project-description{
		/*background-color: yellow;*/
		box-sizing: border-box;
		display: inline-block;
		padding: 10px 15px;
	}
	section#container-last-projects .container .card-projects .project .project-description .title{
		font-size: 18px;
		letter-spacing: 2px;
		font-weight: 700;
		margin: 20px 0px;
	}
	section#container-last-projects .container .card-projects .project .project-description .title .link{
		color: #001521;
		text-decoration: none;
	}
	section#container-last-projects .container .card-projects .project .project-description .description{
		margin-bottom: 20px;
		text-overflow: ellipsis;
	}
	/* Fin estilos Project */
	

	/* Responsive */
	@media (max-width: 960px){
		section#container-last-projects .container .card-projects .project .project-image{
			height: 200px;
		}
		section#container-last-projects .container .card-projects .project .project-description{
			max-height: 250px;
			box-sizing: border-box;
			overflow: hidden;
		}
	}
	@media (max-width: 820px){
		section#container-last-projects .container .card-projects{
			margin: 30px 0px;
			grid-template-columns: 1fr 1fr;
		}
		section#container-last-projects .container .card-projects .project:hover{
			transform: scale(1.04);
		}
		section#container-last-projects .container .card-projects .project .project-image{
			height: 250px;
		}
	}
	@media (max-width: 720px){
		section#container-last-projects .container .card-projects .project:hover{
			transform: scale(1.04);
		}
	}
	@media (max-width: 540px){
		section#container-last-projects .container .card-projects .project:hover{
			transform: scale(1.05);
		}
		section#container-last-projects .container .card-projects .project .project-image{
			height: 200px;
		}
		section#container-last-projects .container .card-projects .project .project-description{
			max-height: 200px;
			box-sizing: border-box;
			overflow: hidden;
		}
	}
	@media (max-width: 420px){
		section#container-last-projects .container .card-projects{
			margin: 30px 0px;
			grid-template-columns: 1fr;
		}
		section#container-last-projects .container .card-projects .project:hover{
			transform: scale(1.05);
		}
		section#container-last-projects .container .card-projects .project .project-image{
			height: 200px;
		}
		section#container-last-projects .container .card-projects .project .project-description{
			max-height: 200px;
			box-sizing: border-box;
			overflow: hidden;
		}
	}
</style>