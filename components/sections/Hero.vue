<template>
    <section id="hero">
        <v-row no-gutters>
            <v-img
                :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
                gradient="to top right, rgba(0,0, 0,.33), rgba(0, 0, 0,.7)"
                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
            >
                <v-theme-provider dark>
                    <v-container fill-height>
                        <v-row
                            align="center"
                            class="white--text mx-auto"
                            justify="center"
                        >
                            <v-col
                                class="white--text text-center"
                                cols="12"
                                tag="h1"
                            >
                                <span
                                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                                    class="font-weight-light"
                                >
                                    Ismael Jhon Jalbuna Jr.
                                </span>

                                <br>

                                <span
                                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                                    class="font-weight-black"
                                >
                                    Full Stack Developer
                                </span>

                            </v-col>

                            <v-btn
                                class="align-self-end"
                                fab
                                outlined
                                @click="$vuetify.goTo('#about-me')"
                            >
                                <v-icon>mdi-arrow-down</v-icon>
                            </v-btn>
                        </v-row>
                    </v-container>
                </v-theme-provider>
            </v-img>
        </v-row>
    </section>
</template>
<script>
export default {
    name: 'hero'
}
</script>