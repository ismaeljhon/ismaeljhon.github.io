<template>
	<div id="app">
		<v-app>
			<v-app-bar
				app
				height="100"
				color="white"
				dense
			>
				<v-spacer></v-spacer>
				<NuxtLink to="/">
					<v-avatar
						size="100"
						tile
					>
						<v-img
							v-bind="props"
							contain
							src="/logo.png"
						></v-img>
					</v-avatar>
				</NuxtLink>
				<NuxtLink to="/about">
					<v-btn text>About Me</v-btn>
				</NuxtLink>
				<NuxtLink to="/portfolio">
					<v-btn text>Portfolio</v-btn>
				</NuxtLink>
				<v-btn text @click.prevent="$vuetify.goTo('#contact')">Contact</v-btn>
				<v-spacer></v-spacer>
			</v-app-bar>
			<v-main>
				<nuxt />
			  	<contact-me></contact-me>
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
	name: 'App'
}
</script>
