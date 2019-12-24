<template>
	<div id="container-contact">
		<div class="container">
			<div class="container-title">
				<h2 class="title text-bold">Contacto</h2>
			</div>
			<div class="container-form">
				<form action="" method="POST">
					<div class="form-group-input">
						<input type="text" class="txtNombreApellido" placeholder="Nombre y Apellido" autocomplete="off">
					</div>
					<div class="form-group-input">
						<input type="email" class="txtEmail" placeholder="Correo Electronico" autocomplete="false">
					</div>
					<div class="form-group-textarea">
						<textarea name="txtMensaje" class="txtMensaje" rows="3" placeholder="Mensaje"></textarea>
					</div>
					<div class="container-submit">
						<button class="btnEnviarMensaje">Enviar Mensaje</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
	#container-contact{
		width: 100%;
	}
	#container-contact .container{
		margin: 100px auto;
		/*background-color: yellow;*/
	}
	#container-contact .container .container-title{
		margin-bottom: 40px;
		text-align: center;
	}
	#container-contact .container .container-title .title{
		letter-spacing: 5px;
		text-transform: uppercase;
	}
	#container-contact .container .container-form{
		width: 100%;
		padding: 5px;
		/*background-color: green;*/
	}
	#container-contact .container .container-form form{
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	#container-contact .container .container-form form .form-group-input{
		background-color: pink;
	}
	#container-contact .container .container-form form .form-group-textarea{
		/*background-color: brown;*/
		grid-column-start: 1;
		grid-column-end: 3;
	}
	#container-contact .container .container-form form .form-group-input input,
	#container-contact .container .container-form form .form-group-textarea textarea{
		width: 100%;
		box-sizing: border-box;
		border: 2px solid rgba(0,0,0,0.5);
		border-radius: 6px;
		/*border-bottom: 2px solid rgba(0,21,33,0.8);*/
		color: #505050;
		font-size: 20px;
		padding: 6px;
		resize: none;
		outline: none;
	}
	#container-contact .container .container-form form .form-group-input input:focus,
	#container-contact .container .container-form form .form-group-textarea textarea:focus{
		border: 2px solid rgba(0,21,33,0.8);
	}
	#container-contact .container .container-form form .container-submit{
		/*background-color: pink;*/
		grid-column-start: 1;
		grid-column-end: 3;
		text-align: center;
	}
	#container-contact .container .container-form form .container-submit button{
		background-color: #001521;
		border: none;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		font-size: 20px;
		padding: 10px 15px;
		outline: none;
	}
	#container-contact .container .container-form form .container-submit button:hover{
		background-color: rgba(0,21,33,0.9);
	}
	#container-contact .container .container-form form .container-submit button:active{
		transform: scale(1.03);
	}



	#container-contacto > #container-formulario > form > #container-submit button{
		background-color: #43A050;
		border: none;
		border-radius: 5px;
		color: white;
		cursor: pointer;
		font-size: 20px;
		padding: 10px 15px;
	}
	#container-contacto > #container-formulario > form > #container-submit button:active{
		border: 1px solid skyblue;
	}
</style>