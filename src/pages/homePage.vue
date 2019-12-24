<template>
	<div id="home-page">
		<!-- <menu-vue></menu-vue> -->
		<header-vue></header-vue>
		<aboutme-vue></aboutme-vue>
		<lastprojects-vue></lastprojects-vue>
		<services-vue></services-vue>
	</div>
</template>

<script>
	export default{
		name: "home-page",
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
	#home-page{
		padding: 0px;
		margin: 0px;
		height: auto;
	}
</style>