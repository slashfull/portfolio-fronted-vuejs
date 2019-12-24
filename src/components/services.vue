<template>
	<div id="container-services">
		<div class="container">
			<div class="container-title">
				<h2 class="title text-bold">Servicios</h2>
			</div>
			<div class="container-services">
				<div class="card-service">
					<div class="card-image">
						<img src="../assets/img/coding.png" alt="">
					</div>
					<div class="card-body">
						<div class="card-title">
							<p class="text-bold">Desarrollo</p>
						</div>
						<div class="card-content">
							<p>Elaboración y mantención de software.</p>
						</div>
					</div>
				</div>
				<div class="card-service">
					<div class="card-image">
						<img src="../assets/img/info.png" alt="">
					</div>
					<div class="card-body">
						<div class="card-title">
							<p class="text-bold">Ayudantía</p>
						</div>
						<div class="card-content">
							<p>Apoyo en materias a fines a la carrera.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
	#container-services{
		margin-bottom: 100px;
	}
	#container-services .container .container-title{
		text-align: center;
		margin-bottom: 40px;
	}
	#container-services .container .container-title .title{
		letter-spacing: 5px;
		text-transform: uppercase;
	}
	#container-services .container .container-services{
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	#container-services .container .container-services .card-service{
		text-align: center;
	}
	#container-services .container .container-services .card-service .card-image{
		padding: 10px;
	}
	#container-services .container .container-services .card-service .card-image img{
		width: 30%;
	}
	#container-services .container .container-services .card-service .card-body{
		padding: 10px;
	}
	#container-services .container .container-services .card-service .card-body .card-title{
		font-size: 25px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	#container-services .container .container-services .card-service .card-body .card-content{
		font-size: 20px;
	}

	/* Responsive */
	@media (max-width: 960px){
		#container-services .container .container-services .card-service .card-image img{
			width: 35%;
		}
	}
	@media (max-width: 720px){}
	@media (max-width: 540px){
		#container-services .container .container-services{
			grid-template-columns: 1fr;
		}
	}
</style>