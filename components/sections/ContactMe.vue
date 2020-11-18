<template>
  <v-sheet id="contact" color="#fff" tag="section" tile>
    <div class="py-12"></div>

    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
        Contact Me
      </h2>

      <v-responsive class="mx-auto mb-5" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-theme-provider light>
        <v-row>
          <v-col cols="12">
            <h3 class="text-center mb-5">via</h3>
            <p class="text-center">
              <a
                v-for="(item, index) in contactLinks"
                :key="index"
                :href="item.link"
                class="mr-3"
                target="blank"
              >
                <img :src="item.icon" width="32" />
              </a>
            </p>
          </v-col>
        </v-row>
      </v-theme-provider>
    </v-container>

    <div class="py-12"></div>
  </v-sheet>
</template>
<script>
export default {
  name: 'ContactMe',
  data: () => ({
    contactLinks: [
      {
        name: 'email',
        link: 'mailto:jalbuna.ismael@gmail.com',
        icon: require('../../assets/email.png'),
      },
      {
        name: 'facebook',
        link: 'https://www.facebook.com/jhonismjr',
        icon: require('../../assets/facebook.png'),
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/ismael-jhon-jr-jalbuna-57b62771/',
        icon: require('../../assets/linkedin.png'),
      },
    ],
  }),
}
</script>
