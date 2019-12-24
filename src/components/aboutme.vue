<template>
	<section id="container-aboutme">
		<div class="container">
			<div class="container-title">
				<h2 class="title text-bold">Sobre Mi</h2>
			</div>
			<div class="container-information">
				<div class="container-descripcion-frase">
					<p class="descripcion">hola soy Diego Pacaje, ingeniero informático
						apasionado por el <strong class="text-bold">desarrollo de software</strong> 
						en sus diversas plataformas. Busco ser creativo y autodidacta para 
						seguir mejorando mis habilidades.
						Actualmente me perfecciono en el ámbito web y dispositivos móviles.</p>
					<div class="frase">
						<q>Los logros serán equivalente al esfuerzo y perseverancia dedicada</q>
					</div>
				</div>
				<div class="container-image">
					<img src="../assets/img/web.png" alt="">
				</div>
			</div>
		</div>
	</section>
</template>

<script></script>

<style>
	section#container-aboutme .container{
		/*background-color: green;*/
	}
	section#container-aboutme .container .container-title{
		text-align: center;
		margin-bottom: 40px;
	}
	section#container-aboutme .container .container-title .title{
		letter-spacing: 5px;
		text-transform: uppercase;
	}
	section#container-aboutme .container .container-information{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	section#container-aboutme .container .container-information .container-descripcion-frase{
		padding: 30px 30px;
	}
	section#container-aboutme .container .container-information .container-descripcion-frase .descripcion{
		font-size: 25px;
		text-align: justify;
		margin-bottom: 30px;
	}
	section#container-aboutme .container .container-information .container-descripcion-frase .frase{
		font-size: 20px;
		text-align: right;
	}
	section#container-aboutme .container .container-information .container-image{
		text-align: center;
		overflow: hidden;
	}
	section#container-aboutme .container .container-information .container-image img{
		width: 90%;
		object-fit: cover;
	}

	/* Media Queries */
	@media (max-width: 1280px){}
	@media (max-width: 960px){
		section#container-aboutme .container .container-information{
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: 2;
			grid-gap: 20px;
		}
		section#container-aboutme .container .container-information .container-descripcion-frase .descripcion{
			font-size: 23px;
			/*text-align: justify;*/
			margin-bottom: 10px;
		}
		section#container-aboutme .container .container-information .container-image{
			padding: 30px 30px;
		}
		section#container-aboutme .container .container-information .container-image img{
			width: 70%;
		}
	}
	@media (max-width: 720px){
		section#container-aboutme .container .container-title{
			margin-bottom: 20px;
		}
		section#container-aboutme .container .container-information .container-descripcion-frase .frase{
			text-align: center;
			padding-top: 10px;
		}
		section#container-aboutme .container .container-information .container-image img{
			width: 100%;
		}
		section#container-aboutme .container .container-information{
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 540px){}
</style>