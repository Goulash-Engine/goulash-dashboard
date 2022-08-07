<template>
  <div>
    <v-row>
      <v-icon large>
        mdi-application-cog-outline
      </v-icon>
      <v-card-title>Simulation Controls</v-card-title>
    </v-row>
    <v-row>
      <v-col style="text-align: center" cols="6">
        <v-btn :color="simulationStatus.status == 'running' ? 'orange' : 'green' " @click="startSimulation">
          {{ buttonLabel() }}
        </v-btn>
      </v-col>
      <v-col style="text-align: center" cols="6">
        <v-btn :disabled="simulationStatus.status == 'not running'" color="red" @click="stopSimulation">
          Stop
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SimulationStatus from '../types/simulationstatus'

@Component
export default class Controls extends Vue {
  @Prop({ type: Object as () => SimulationStatus, required: true })
  simulationStatus: SimulationStatus

  buttonLabel () {
    if (this.simulationStatus.status === 'running') {
      return 'Pause'
    }
    if (this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown') {
      return 'Start'
    }
    if (this.simulationStatus.status === 'paused') {
      return 'Resume'
    }
  }

  startSimulation () {
    if (this.simulationStatus.status === 'running') {
      this.$axios.post('http://localhost:8080/simulation/pause')
    }

    if (this.simulationStatus.status === 'paused') {
      this.$axios.post('http://localhost:8080/simulation/pause')
    }

    if (this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown') {
      this.$axios.post('http://localhost:8080/simulation/start')
    }
  }

  stopSimulation () {
    this.$axios.post('http://localhost:8080/simulation/stop')
  }
}
</script>
