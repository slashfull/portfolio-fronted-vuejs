<template>
	<div id="container-menu">
		<nav id="menu-horizontal">
			<ul>
				<li><router-link id="link-menu" to="/"><i class="fas fa-home"></i> &nbsp; Inicio</router-link></li>
				<li><router-link id="link-menu" to="/proyectos"><i class="fas fa-briefcase"></i> &nbsp; Proyectos</router-link></li>
				<li><router-link id="link-menu" to="/sobremi"><i class="fas fa-address-card"></i> &nbsp; Sobre mí</router-link></li>
			</ul>
		</nav>
		<div id="menu-display">
			<div id="menu-modal" class="">
				<div class="menu-header">
					Menu
					<button type="button" v-on:click="cerrarMenu" class="btn-close-menu-modal"><i class="fas fa-times"></i></button>
				</div>
				<nav id="menu-vertical">
					<ul>
						<li><router-link id="link-menu-vert" to="/"><i class="fas fa-home"></i> &nbsp; Inicio</router-link></li>
						<li><router-link id="link-menu-vert" to="/proyectos"><i class="fas fa-briefcase"></i> &nbsp; Proyectos</router-link></li>
						<li><router-link id="link-menu-vert" to="/sobremi"><i class="fas fa-address-card"></i> &nbsp; Sobre mí</router-link></li>
					</ul>
				</nav>
			</div>
			<button id="btn-menu" v-on:click="abrirMenu"><i class="fas fa-bars"></i></button>
		</div>
	</div>
</template>

<script>
	export default{
		name: "container-menu",
		mounted(){
			//this.fijarMenu();
		},
		updated: function(){
			//this.fijarMenu();
		},
		data(){
			return{
				//
			}
		},
		methods: {
			abrirMenu: function(){
				document.getElementById("menu-modal").style.cssText = "left: 0;";
			},
			cerrarMenu: function(){
				document.getElementById("menu-modal").style.cssText = "left: -100%;";
			},
			fijarMenu(){
				window.$(window).bind("scroll", function(){
					if ( window.$(window).scrollTop() > 50 ) {
						// window.$("#container-menu").css("background-color", "#2f2f2f");
						// window.$("#menu-display").css("background-color", "#2f2f2f");
					} else {
						// window.$("#container-menu").css("background-color", "transparent");
						// window.$("#menu-display").css("background-color", "transparent");
					}
				});
			},
			// cerrarMenu2(){
			// 	window.$("#menu-vertical a").click(function(){
			// 		document.getElementById("menu-modal").style.cssText = "left: -100%;";
			// 	});
			// }
		}
	}
</script>

<style>
	#container-menu{
		margin: auto;
		padding-top: 5px;
		/*position: fixed;*/
		width: 100%;
		z-index: 99999;
		background-color: #001521;
	}
	#container-menu nav#menu-horizontal{
		margin: auto;
		/*max-width: 1000px;*/
		padding: 15px;
		text-align: right;
		font-size: 23px;
	}
	#container-menu nav#menu-horizontal ul li{
		display: inline-block;
		list-style: none;
		padding: 3px 5px;
	}
	#container-menu nav#menu-horizontal ul li #link-menu{
		text-decoration: none;
		font-weight: 500;
		color: white;
		padding: 5px 7px;
		border-bottom: 2px solid transparent;
		transition: 1s;
	}
	#container-menu nav#menu-horizontal ul li #link-menu:hover{
		border-bottom: 2px solid white;
	}


	#container-menu #menu-display{
		display: none;
		font-size: 20px;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		transition: all 1s;
		background-color: #001521;
		z-index: 999;
	}
	#container-menu #menu-display #btn-menu{
		background-color: transparent;
		border: none;
		color: #fff;
		cursor: pointer;
		font-size: 30px;
		height: 50px;
		outline: none;
		width: 50px;
	}
	#container-menu #menu-display #menu-modal{
		background-color: #001521;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		/*z-index: 9999;*/
		transition: all 2s;
		left: -100%;
		overflow: hidden;
		width: 100%;
	}
	.abrirMenu{
		left: 0 !important;
	}
	#container-menu #menu-display #menu-modal .menu-header{
		padding: 20px;
		/*background-color: green;*/
		position: relative;
		color: white;
	}
	#container-menu #menu-display #menu-modal .menu-header .btn-close-menu-modal{
		position: absolute;
		top: 25%;
		right: 10px;
		font-size: 25px;
		width: 30px;
		height: 30px;
		background-color: transparent;
		border: none;
		color: white;
		cursor: pointer;
		outline: none;
	}
	#container-menu #menu-display #menu-modal #menu-vertical{
		/*background-color: red;*/
		padding: 5px;
	}
	#container-menu #menu-display #menu-modal #menu-vertical ul{
		overflow: hidden;
	}
	#container-menu #menu-display #menu-modal #menu-vertical ul li{
		list-style: none;
	}
	#container-menu #menu-display #menu-modal #menu-vertical ul li #link-menu-vert{
		color: white;
		display: inline-block;
		margin: 5px 0;
		padding: 10px 0px 10px 20px;
		text-decoration: none;
		width: 100%;
	}
	#container-menu #menu-display #menu-modal #menu-vertical ul li #link-menu-vert:hover{
		background-color: rgba(0,0,0,0.4);
	}

	/* Media Queries */
	@media (max-width: 960px){
		#container-menu nav#menu-horizontal{
			font-size: 20px;
		}
	}
	@media (max-width: 720px){
		#container-menu nav#menu-horizontal{
			display: none;
		}
		#container-menu #menu-display{
			display: flex;
		}
	}
	@media (max-width: 540px){
		#container-menu nav#menu-horizontal{
			display: none;
		}
		#container-menu #menu-display{
			display: flex;
		}
	}
</style>