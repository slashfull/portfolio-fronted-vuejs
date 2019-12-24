<template>
	<footer id="container-footer">
		<div class="container">
			<div class="container-links">
				<h3 class="title"><span>Menu</span></h3>
				<div><router-link class="link" to="/">Inicio</router-link></div>
				<div><router-link class="link" to="/proyectos">Proyectos</router-link></div>
				<div><router-link class="link" to="/sobremi">Sobre mí</router-link></div>
			</div>
			<div class="container-rrss">
				<h3 class="title"><span>Redes Sociales</span></h3>
				<div><a v-bind:href="'https://www.linkedin.com/in/dpacaje'" class="link" target="_blank">LinkedIn</a></div>
				<div><a v-bind:href="'https://www.facebook.com/diego.pacajeflores'" class="link" target="_blank">Facebook</a></div>
				<div><a v-bind:href="'https://www.instagram.com/diego_a95/'" class="link" target="_blank">Instagram</a></div>
			</div>
			<div class="container-derechos-reservados">
				<p>&copy; diego alfonso - todos los derechos reservados.</p>
			</div>
		</div>
	</footer>
</template>

<script></script>

<style>
	#container-footer{
		background-color: #001521;
		width: 100%;
		height: 280px;
		overflow: hidden;
	}
	#container-footer .container{
		margin-top: 20px;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		height: 100%;
	}
	#container-footer .container .container-links,
	#container-footer .container .container-rrss{
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		color: white;
	}
	#container-footer .container .container-links .title,
	#container-footer .container .container-rrss .title{
		text-align: center;
		margin-bottom: 8px;
	}
	#container-footer .container .container-links .title span,
	#container-footer .container .container-rrss .title span{
		border-bottom: 1px solid white;
		padding-bottom: 3px;
	}
	#container-footer .container .container-links div,
	#container-footer .container .container-rrss div{
		margin: 5px 0px;
		text-align: center;
	}
	#container-footer .container .container-links .link,
	#container-footer .container .container-rrss .link{
		text-decoration: none;
		color: white;
		font-size: 18px;
		padding: 2px 0px;
	}
	#container-footer .container .container-links .link:hover::before,
	#container-footer .container .container-rrss .link:hover::before{
		content: '- ';
	}
	#container-footer .container .container-links .link:hover::after,
	#container-footer .container .container-rrss .link:hover::after{
		content: ' -';
	}
	#container-footer .container .container-derechos-reservados{
		grid-column-start: 1;
		grid-column-end: 3;
		text-align: center;
		margin-bottom: 20px;
	}
</style>