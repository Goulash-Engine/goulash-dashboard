<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-row>
          <v-col>
            <v-card>
              <v-row>
                <v-col cols="8">
                  <v-icon large>
                    mdi-information
                  </v-icon>
                  <v-card-title>Simulation Info</v-card-title>
                </v-col>
                <v-col cols="4">
                  <v-card-text>Status: {{ simulationStatus }}</v-card-text>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <div class="py-4"></div>
        <v-row>
          <v-col>
            <v-card>
              <v-row>
                <v-col cols="8">
                  <v-row>
                    <v-icon large>mdi-application-cog-outline</v-icon>
                    <v-card-title>Simulation Controls</v-card-title>
                  </v-row>
                </v-col>
                <v-col align-self="center" cols="4">
                  <v-btn :color="simulationStatus == 'running' ? 'orange' : 'green' " @click="startSimulation">
                    {{ buttonLabel() }}
                  </v-btn>
                  <div class="py-1"></div>
                  <v-btn color="red" @click="stopSimulation">
                    Stop
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="8">
        <v-card>
          <v-card-title>Goulash-Dashboard</v-card-title>
          <goulash-container/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  simulationStatus: string = 'unknown'

  buttonLabel() {
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

  startSimulation() {
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

  stopSimulation() {
    this.$axios.post('http://localhost:8080/simulation/stop')
  }

  mounted() {
    setInterval(() => {
      this.fetchStatus()
    }, 1000)
  }

  fetchStatus() {
    this.$axios.get('http://localhost:8080/simulation/status').then((response) => {
      this.simulationStatus = response.data
    })
  }
}
</script>
