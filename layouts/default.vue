<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer absolute app>
      <span>&copy; Goulash Dashboard {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
