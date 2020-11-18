<template>
  <section id="about-me">
    <div class="py-12"></div>

    <v-container class="text-center">
      <v-responsive
        class="mx-auto title font-weight-light mb-8"
        max-width="820"
      >
        <v-avatar class="elevation-12 mb-10" size="256">
          <v-img :src="require(`~/assets/profile-pic.jpg`)"></v-img>
        </v-avatar>
        <p>
          Hello! I’m Ismael Jhon Jalbuna Jr, a
          <strong>Full Stack Web Developer</strong> from Davao City,
          Philippines.
        </p>
        <p>
          I do <strong>Front-end tasks</strong> and can also build
          <strong>Back-end API</strong> in Javascript.
        </p>
        <p>
          In my <strong>7 years of experience</strong>, I helped businesses from
          small to big enterprises which allowed me to accumulate various
          skillset such as:<br />
          <br />
          <v-btn
            v-for="(item, index) in skillSets"
            :key="index"
            small
            outlined
            class="mr-2 mb-2"
            tile
            :href="item.link"
            target="_blank"
            text
          >
            {{ item.label }}
          </v-btn>
        </p>
      </v-responsive>

      <div></div>

      <v-btn
        color="primary"
        x-large
        tile
        @click.prevent="$vuetify.goTo('#contact')"
      >
        <span class="font-weight-bold"> Contact Me </span>
      </v-btn>
      <p class="mt-2 text-center">or</p>
      <NuxtLink to="/about">
        <v-btn small tile depressed outlined>
          <span class="font-weight-bold"> Want to know me more? </span>
        </v-btn>
      </NuxtLink>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
<script>
export default {
  name: 'About',
  data: () => ({
    skillSets: [
      { label: 'VueJs', link: 'https://vuejs.org/' },
      { label: 'NuxtJs', link: 'https://nuxtjs.org/' },
      { label: 'ElectronJs', link: 'https://www.electronjs.org/' },
      {
        label: 'Electron-Vue',
        link: 'https://github.com/SimulatedGREG/electron-vue',
      },
      { label: 'ExpressJS', link: 'https://expressjs.com/' },
      { label: 'HTML + CSS to Wordpress', link: 'https://wordpress.org/' },
      { label: 'Woocommerce', link: 'https://woocommerce.com/' },
      { label: 'PHP', link: 'https://www.php.net/' },
      { label: 'MySQL', link: 'https://www.mysql.com/' },
      { label: 'Shopify', link: 'https://www.shopify.com/' },
      { label: 'Squarespace', link: 'https://www.squarespace.com/' },
    ],
  }),
}
</script>
