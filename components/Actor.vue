<template>
  <v-card color="purple">
    <v-card-title>Actor</v-card-title>
    <v-card-subtitle>Foo</v-card-subtitle>
    <v-card-text>
      <v-list>
        <v-list-item>Urges: 123</v-list-item>
        <v-list-item>State: ABC</v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class Actor extends Vue {
}
</script>
