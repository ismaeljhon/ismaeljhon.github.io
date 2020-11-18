<template>
  <section id="features" class="grey lighten-3">
    <div class="py-12"></div>

    <v-container class="text-center">
      <h2 class="display-2 font-weight-bold mb-3">WHAT I CAN OFFER</h2>

      <v-responsive class="mx-auto mb-12" width="56">
        <v-divider class="mb-1"></v-divider>
        <v-divider></v-divider>
      </v-responsive>

      <v-row>
        <v-col
          v-for="({ icon, title, text }, i) in features"
          :key="i"
          cols="12"
          md="6"
          sm="6"
          xl="3"
        >
          <v-card class="py-12 px-4" color="grey lighten-5" flat>
            <v-theme-provider dark>
              <div>
                <v-avatar color="primary" size="88">
                  <v-icon large v-text="'mdi-' + icon"></v-icon>
                </v-avatar>
              </div>
            </v-theme-provider>

            <v-card-title
              class="justify-center font-weight-black text-uppercase"
              v-text="title"
            ></v-card-title>

            <v-card-text class="subtitle-1" v-text="text"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <div class="py-12"></div>
  </section>
</template>
<script>
export default {
  name: 'ServicesOffered',
  data: () => ({
    features: [
      {
        icon: 'code-json',
        title: 'Build from Scratch',
        text:
          'Turn your designs into reality. Show your wireframe, and will transform it into your desired application/website.',
      },
      {
        icon: 'puzzle',
        title: 'Custom Functions',
        text:
          'Already have an application or website? Let your further needs be heard, will come up a solution together.',
      },
      {
        icon: 'application-cog',
        title: 'Maintenance',
        text:
          'Help maintain your website up-to date. Upload latest content or updating tools/plugins to avoid security vulnerability.',
      },
      {
        icon: 'package-variant-closed',
        title: 'Hybrid Application',
        text:
          'Build cross-platform desktop or mobile apps with JavaScript, HTML, and CSS that would suit your needs.',
      },
    ],
  }),
}
</script>
