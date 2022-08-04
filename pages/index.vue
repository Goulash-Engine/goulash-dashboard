<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-5 pt-1 pb-5">
        <v-row justify="center">
          <v-card-title>Simulation Controls</v-card-title>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle>Status: {{ simulationStatus }}</v-card-subtitle>
        </v-row>
        <v-row justify="space-around">
          <v-btn :color="simulationStatus == 'running' ? 'orange' : 'green' " @click="startSimulation">
            {{ buttonLabel() }}
          </v-btn>
          <v-btn color="red" @click="stopSimulation">
            Stop
          </v-btn>
        </v-row>
      </v-card>
      <div class="pt-5" />
      <v-card>
        <v-row justify="center">
          <v-card-title>Goulash-Dashboard</v-card-title>
        </v-row>
        <v-row justify="center">
          <goulash-container />
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  simulationStatus: string = 'unknown'

  buttonLabel () {
    if (this.simulationStatus === 'running') {
      return 'Pause'
    }
    if (this.simulationStatus === 'not running' || this.simulationStatus === 'unknown') {
      return 'Start'
    }
    if (this.simulationStatus === 'paused') {
      return 'Resume'
    }
  }

  startSimulation () {
    if (this.simulationStatus === 'running') {
      this.$axios.post('http://localhost:8080/simulation/pause')
    }

    if (this.simulationStatus === 'paused') {
      this.$axios.post('http://localhost:8080/simulation/pause')
    }

    if (this.simulationStatus === 'not running' || this.simulationStatus === 'unknown') {
      this.$axios.post('http://localhost:8080/simulation/start')
    }
  }

  stopSimulation () {
    this.$axios.post('http://localhost:8080/simulation/stop')
  }

  mounted () {
    setInterval(() => {
      this.fetchStatus()
    }, 1000)
  }

  fetchStatus () {
    this.$axios.get('http://localhost:8080/simulation/status').then((response) => {
      this.simulationStatus = response.data
    })
  }
}
</script>
