<template>
	<div class="login-page">
		<div class="container-page">
			<div class="container-form">
				<h2 class="title">Inicio de Sesión</h2>
				<div v-if="errores.length" class="container-error">
					<p>Por favor, corrija el(los) siguiente(s) error(es):</p>
					<ul>
						<li v-for="error in errores" v-bind:key="error.id">
							{{ error }}
						</li>
					</ul>
				</div>
				<form 
				action="#" 
				class="form-login"
				@submit="checkform"
				autocomplete="off">
					<div class="form-group">
						<label for="correo">correo electrónico</label>
						<input type="email" name="correo" id="correo" v-model="correo">
					</div>
					<div class="form-group">
						<label for="contrasena">contraseña</label>
						<input type="password" name="contrasena" id="contrasena" v-model="contrasena">
					</div>
					<div class="form-group">
						<button type="submit" class="btn-login">Iniciar</button>
					</div>
					<div class="form-group">
						<router-link to="/" class="link-loss-pass">olvide mi contraseña</router-link>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: "login-page",
		data(){
			return{
				correo: null,
				contrasena: null,
				errores: []
			}
		},
		methods: {
			checkform: function(e){
				e.preventDefault();
				this.errores = [];

				if (!this.correo) {
					this.errores.push("Debe ingresar el correo.");
				} else if (!this.validEmail(this.correo)) {
					this.errores.push("Ingrese un correo válido.");
				}
				if (!this.contrasena) {
					this.errores.push("Debe ingresar la contraseña.");
				}
				// console.log(this.errores);
				if (!this.errores.length) {
					// return true;
					this.errores.push("Esta todo OK.");
					// llamar funcion y crear codigo para realizar la petición de login al sistema.
				}
			},
			validEmail: function (correo) {
		    	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    	return re.test(correo);
		    }
		}
	}
</script>

<style>
	.login-page{
		background-image: url(../assets/img/login-padlock.jpg);
		background-size: cover;
		background-position: center;
	}
	.login-page .container-page{
		box-sizing: border-box;
		width: 100%;
		min-height: 400px;
		padding: 50px 20px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
	.login-page .container-page .container-form{
		grid-column-start: 2;
		grid-column-end: 3;
		width: 100%;
		background-color: #f0f0f0;
		border-radius: 20px;
		padding: 40px 50px;
		box-sizing: border-box;
	}
	.login-page .container-page .container-form h2{
		letter-spacing: 1px;
		border-bottom: 2px solid gray;
		margin-bottom: 10px;
	}
	.login-page .container-page .container-form .container-error{
		background-color: #F8D7DA;
		border-radius: 3px;
		border: 1px solid #fabec4;
		padding: 5px;
		box-sizing: border-box;
	}
	.login-page .container-page .container-form .container-error ul{
		list-style: inside;
	}
	.login-page .container-page .container-form form .form-group{
		display: flex;
		flex-direction: column;
		padding: 15px 0px;
	}
	.login-page .container-page .container-form form .form-group label{
		font-size: 20px;
	}
	.login-page .container-page .container-form form .form-group input{
		font-size: 17px;
		padding: 5px 5px;
		border: none;
		border-radius: 5px;
	}
	.login-page .container-page .container-form form .form-group button{
		background-color: #001521;
		border: 1px solid #001521;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		padding: 8px;
	}
	.login-page .container-page .container-form form .form-group .link-loss-pass{
		margin: auto;
		text-decoration: none;
		color: blue;
	}
</style>