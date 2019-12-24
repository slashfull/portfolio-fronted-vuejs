<template>
	<header id="container-header">
		<!-- <menu-vue></menu-vue> -->
		<div class="container-title-header">
			<div class="container-title">
				<span class="title">Diego Alfonso</span>
				<span class="subtitle">Desarrollador de Software</span>
			</div>
			<div class="container-photo-contact-header">
				<div class="container-photo">
					<img src="../assets/img/yo_2.jpg" alt="">
				</div>
				<div class="container-contact">
					<div class="container-links">
						<!-- Facebook -->
						<div class="link">
							<div class="link-icon">
								<a v-bind:href="'https://www.linkedin.com/in/dpacaje'" target="_blank" title="LinkedIn">
									<i class="fab fa-linkedin-in"></i>
								</a>
							</div>
							<div class="link-text">
								LinkedIn
							</div>
						</div>
						<!-- Facebook -->
						<div class="link">
							<div class="link-icon">
								<a v-bind:href="'https://www.facebook.com/diego.pacajeflores'" target="_blank" title="Facebook">
									<i class="fab fa-facebook-f"></i>
								</a>
							</div>
							<div class="link-text">
								Facebook
							</div>
						</div>
						<!-- Facebook -->
						<div class="link">
							<div class="link-icon">
								<a v-bind:href="'https://www.instagram.com/diego_a95/'" target="_blank" title="Instagram">
									<i class="fab fa-instagram"></i>
								</a>
							</div>
							<div class="link-text">
								Instagram
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default{
		name: "container-header",
		mounted(){
			this.buttonsFloating();
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
			buttonsFloating: function(){
				//
			}
		}
	}
</script>

<style>
	header#container-header{
		background-image: url(../assets/img/fondo1.jpg);
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		height: 500px;
		width: 100%;
	}
	.container-title-header{
		height: 500px;
		max-width: 1366px;
		margin: auto;
		width: 100%;
	}
	.container-title-header .container-title{
		color: white;
		height: 65%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 50px;
	}
	.container-title-header .container-title .title,
	.container-title-header .container-title .subtitle,
	.container-title-header .container-title .frase{
		display: block;
	}
	.container-title-header .container-title .title{
		font-size: 80px;
	}
	.container-title-header .container-title .subtitle{
		font-size: 25px;
	}
	.container-title-header .container-title .frase{
		font-size: 20px;
		padding-right: 10px;
	}

	.container-title-header .container-photo-contact-header{
		padding-left: 50px;
		height: 35%;
		background-color: #001521;
		display: flex;
		flex-wrap: wrap;
	}

	.container-title-header .container-photo-contact-header .container-photo{
		width: 250px;
		height: 250px;
		background-color: white;
		overflow: hidden;
		padding: 20px;
		transform: translateY(-50px);
	}
	.container-title-header .container-photo-contact-header .container-photo img{
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.container-title-header .container-photo-contact-header .container-contact{
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-right: 50px;
		width: 50%;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links{
		background-color: #001521;
		padding: 20px;
		color: white;
		display: flex;
		align-items: center;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links .link{
		padding: 10px;
		margin: 0px 20px;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links .link .link-icon{
		border: 3px solid white;
		border-radius: 5px;
		width: 40px;
		height: 40px;
		margin: 5px auto;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30px;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links .link .link-icon a{
		color: white;
		padding: 2px 8px;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links .link .link-icon a svg{
		vertical-align: middle;
	}
	.container-title-header .container-photo-contact-header .container-contact .container-links .link .link-text{
		padding-top: 5px;
	}


	/* Media Queries */
	@media (max-width: 1280px){}
	@media (max-width: 960px){
		.container-title-header{
			text-align: center;
		}
		.container-title-header .container-photo-contact-header{
			justify-content: center;
			/*height: auto;*/
			padding: 0px;
		}
		.container-title-header .container-title{
			padding: 0px;
		}
		.container-title-header .container-photo-contact-header .container-contact{
			display: none;
			width: 100%;
			padding: 0px;
		}
	}
	@media (max-width: 720px){
		.container-title-header .container-title{
			height: 70%;
		}
		.container-title-header .container-photo-contact-header{
			height: 30%;
		}
		.container-title-header .container-title .title{
			font-size: 70px;
		}
		.container-title-header .container-photo-contact-header .container-photo{
			width: 200px;
			height: 200px;
			transform: translateY(-40px);
		}
	}
	@media (max-width: 540px){}
</style>