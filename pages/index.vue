<template>
  <v-container fluid>
    <v-row>
      <v-col cols="3">
        <v-card color="grey darken-3" class="px-2 pb-5">
          <v-col>
            <info-panel :simulation-status="simulationStatus" />
          </v-col>
        </v-card>
        <div class="py-2" />
        <v-card color="grey darken-3" class="px-2 pb-5">
          <v-col>
            <controls :simulation-status="simulationStatus" />
          </v-col>
        </v-card>
      </v-col>
      <v-col cols="9">
        <v-card color="grey darken-3">
          <v-card-title>Container: Root</v-card-title>
          <v-divider class="black" />
          <goulash-container />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Dashboard extends Vue {
  simulationStatus: string = 'unknown'

  mounted () {
    setInterval(() => {
      this.fetchStatus()
    }, 1000)
  }

  async fetchStatus () {
    this.simulationStatus = await this.$axios.$get('http://localhost:8080/simulation/status')
  }
}
</script>
