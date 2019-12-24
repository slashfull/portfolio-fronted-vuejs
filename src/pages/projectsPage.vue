<template>
	<div id="projects-page">
		
		<!-- <menu-vue></menu-vue> -->

		<div class="container-banner">
			<div class="container-filter">
				<label for="searchProjects">buscar proyecto</label>
				<input type="text" id="searchProjects" placeholder="ej: chileparking">
			</div>
		</div>
		
		<div class="container">
			<div class="container-content">
				<div class="container-projects">
					<!-- Inicio de la estructura de las cartas de cada proyecto -->
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/1.jpg" alt="">
						</div>
						<div class="project-description">
							<h3 class="text-bold">Titulo Proyecto</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Repellendus autem velit necessitatibus adipisci labore, 
							maiores a, accusantium inventore ipsa, in, placeat. Dolorum 
							blanditiis aperiam aut hic, quam ratione ullam consequuntur!</p>
							<a href="/" class="text-bold">Ver más ...</a>
						</div>
					</div>
					<div class="project">
						<div class="project-image">
							<img src="../assets/img/2.jpg" alt="">
						</div>
						<div class="project-description">
							<h3 class="text-bold">Titulo Proyecto</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
							Repellendus autem velit necessitatibus adipisci labore, 
							maiores a, accusantium inventore ipsa, in, placeat. Dolorum 
							blanditiis aperiam aut hic, quam ratione ullam consequuntur!</p>
							<a href="/" class="text-bold">Ver más ...</a>
						</div>
					</div>
					<!-- Fin de la estructura de los proyectos -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "projects-page",
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
	#projects-page .container{
		padding: 0px;
		margin: 20px auto 20px auto;
	}
	#projects-page .container-banner{
		background-image: url(../assets/img/banner-project.jpg);
		background-size: cover;
		background-position: center;
		width: 100%;
		height: 250px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#projects-page .container-banner .container-filter{
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
	#projects-page .container-banner .container-filter label{
		font-size: 18px;
		color: white;
		margin-bottom: 5px;
	}
	#projects-page .container-banner .container-filter input{
		font-size: 18px;
		padding: 5px;
		border-radius: 5px;
		border: none;
		outline: none;
	}
	#projects-page .container .container-content{
		display: inline-block;
		width: 100%;
	}

	#projects-page .container .container-content .container-projects{
		margin: 30px 0px;
		padding: 0px 10px;
		overflow: hidden;
	}
	#projects-page .container .container-content .container-projects .project{
		background-color: white;
		box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.2);
		margin: 20px 0px;
		display: grid;
		grid-template-columns: 1fr 2fr;
		height: 334px;
		overflow:  hidden;
	}
	#projects-page .container .container-content .container-projects .project .project-image{
		height: 100%;
		width: 100%;
	}
	#projects-page .container .container-content .container-projects .project .project-image img{
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	#projects-page .container .container-content .container-projects .project .project-description{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;
	}
	#projects-page .container .container-content .container-projects .project .project-description h3,
	#projects-page .container .container-content .container-projects .project .project-description p,
	#projects-page .container .container-content .container-projects .project .project-description a{
		margin: 15px 0px;
	}
	#projects-page .container .container-content .container-projects .project .project-description h3{
		font-size: 25px;
	}
	#projects-page .container .container-content .container-projects .project .project-description p{
		text-align: justify;
		font-size: 18px;
	}
	#projects-page .container .container-content .container-projects .project .project-description a{
		text-decoration: none;
		font-size: 20px;
	}

	/* Responsive */
	@media (max-width: 1280px){}
	@media (max-width: 960px){}
	@media (max-width: 720px){}
	@media (max-width: 540px){
		#projects-page .container .container-content .container-projects .project{
			grid-template-columns: 1fr;
			height: auto;
		}
		#projects-page .container .container-content .container-projects .project .project-image{
			height: 300px;
		}
	}
	@media (max-width: 540px){
		#projects-page .container .container-content .container-projects .project .project-image{
			height: 250px;
		}
	}
	/* Fin Responsive */
</style>