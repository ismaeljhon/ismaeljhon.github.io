<template>
	<div id="app">
		<v-app>
			<v-main>
				<nuxt />
      		</v-main>
			<v-footer
				class="justify-center "
				color="#292929"
			>
				<div class="title font-weight-light grey--text text--lighten-1 text-center align-center">
					&copy; {{ (new Date()).getFullYear() }} Jhonism. All Right Reserved.<small>- Powered by <a href="https://pages.github.com/" target="blank">Github Pages</a>, 
					<a href="https://vuetifyjs.com/en/" target="blank">Vuetify</a>, 
					<a href="https://nuxtjs.org/" target="blank">NuxtJS</a></small>
				</div>
			</v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
	name: 'App',
};
</script>
