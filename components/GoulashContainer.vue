<template>
  <v-container fluid>
    <v-row justify="center">
      <actor-detail v-for="i in 5" class="ma-3"/>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class GoulashContainer extends Vue {
}

</script>

