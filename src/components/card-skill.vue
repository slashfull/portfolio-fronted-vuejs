<template>
	<div id="card-skill">
		<div class="card-skill">
			<div class="card-skill-header">
				<h2 class="title text-bold">Habilidades</h2>
			</div>
			<div class="card-skill-body">
				<div class="skill">
					<div class="skill-name">
						<span class="name">java</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w25"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">c#</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w25"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">php</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w75"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">laravel</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w50"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">bootstrap</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w100"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">javascript</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w50"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">vuejs</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w75"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">html</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w75"></div>
					</div>
				</div>
				<!--  -->
				<div class="skill">
					<div class="skill-name">
						<span class="name">css</span>
					</div>
					<div class="skill-progress">
						<div class="progress progress-full"></div>
						<div class="progress progress-obtained w75"></div>
					</div>
				</div>
				<!--  -->
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
	#card-skill .card-skill{
		background-color: #f0f0f0;
		border-radius: 5px;
		padding: 20px;
		font-family: 'Source Sans Pro';
		margin: 20px 0px;
	}
	#card-skill .card-skill .card-skill-header{
		margin-bottom: 20px;
	}
	#card-skill .card-skill .card-skill-header .title{
		font-size: 30px;
		text-transform: uppercase;
		letter-spacing: 3px;
	}
	#card-skill .card-skill .card-skill-body{
		font-size: 20px;
		display: flex;
		flex-wrap: wrap;
	}
	#card-skill .card-skill .card-skill-body .skill{
		width: 50%;
		box-sizing: border-box;
		margin-bottom: 20px;
		color: rgb(0,21,33);
		display: flex;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-name{
		box-sizing: border-box;
		width: 40%;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-name .name{
		box-sizing: border-box;
		text-transform: uppercase;
		padding-left: 20px;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-progress{
		width: 60%;
		position: relative;
		/*padding-right: 40px;*/
		box-sizing: border-box;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-progress .progress{
		background-color: green;
		box-sizing: border-box;
		border-radius: 5px;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-progress .progress-full{
		background-color: #9e9e9e;
		box-sizing: border-box;
		height: 100%;
		width: 100%;
	}
	#card-skill .card-skill .card-skill-body .skill .skill-progress .progress-obtained{
		background-color: #001521;
		box-sizing: border-box;
		height: 100%;
		position: absolute;
		top: 0;
		/*width: 60%;*/
	}

	/* Responsive */
	@media (max-width: 1200px){		#card-skill .card-skill .card-skill-body .skill .skill-name{
			width: 50%;
		}
		#card-skill .card-skill .card-skill-body .skill .skill-progress{
			width: 50%;
		}
	}
	@media (max-width: 960px){}
	@media (max-width: 720px){
		#card-skill .card-skill .card-skill-header .title{
			font-size: 25px;
		}
		#card-skill .card-skill .card-skill-body .skill .skill-name .name{
			padding-left: 0px;
		}
		#card-skill .card-skill .card-skill-body .skill{
			width: 100%;
		}
	}
	@media (max-width: 540px){
		#card-skill .card-skill .card-skill-header .title{
			font-size: 23px;
		}
	}
	/* Fin Responsive */

	/* Generales */
	.w25{width: 25% !important;}
	.w50{width: 50% !important;}
	.w75{width: 75% !important;}
	.w100{width: 100% !important;}
	/* Fin generales */
</style>