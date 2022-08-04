<template>
  <v-container fluid>
    <v-row>
      <v-col cols="4">
        <v-row>
          <v-col>
            <v-card>
              <v-row class="pl-5">
                <v-icon large>
                  mdi-information
                </v-icon>
                <v-card-title>Simulation Info</v-card-title>
              </v-row>
              <v-row>
                <v-card color="ma-5 grey darken-3">
                  <v-card-text>
                    <div class="text-h6">
                      Status: {{ simulationStatus }}
                    </div>
                    <div class="text-caption">
                      Date: {{ dateFormatted() }}
                    </div>
                    <div class="text-caption">
                      Time: {{ timeFormatted() }}
                    </div>
                  </v-card-text>
                </v-card>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <div class="py-4" />
        <v-row>
          <v-col>
            <v-card>
              <v-row>
                <v-col cols="8">
                  <v-row class="pl-5">
                    <v-icon large>
                      mdi-application-cog-outline
                    </v-icon>
                    <v-card-title>Simulation Controls</v-card-title>
                  </v-row>
                </v-col>
                <v-col align-self="center" cols="4">
                  <v-btn :color="simulationStatus == 'running' ? 'orange' : 'green' " @click="startSimulation">
                    {{ buttonLabel() }}
                  </v-btn>
                  <div class="py-1" />
                  <v-btn :disabled="simulationStatus == 'not running'" color="red" @click="stopSimulation">
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
          <goulash-container />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { WorldDate } from '../types/worlddate'

@Component
export default class Dashboard extends Vue {
  simulationStatus: string = 'unknown'
  worldDate?: WorldDate = null

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

  dateFormatted (): string {
    return `${this.worldDate?.day} days ${this.worldDate?.month} months ${this.worldDate?.year} years`
  }

  timeFormatted (): string {
    return `${this.worldDate?.time.hours}h ${this.worldDate?.time.minutes}m ${this.worldDate?.time.seconds}s`
  }

  async fetchStatus () {
    this.simulationStatus = await this.$axios.$get('http://localhost:8080/simulation/status')
    this.worldDate = await this.$axios.$get('http://localhost:8080/simulation/time')
  }
}
</script>
