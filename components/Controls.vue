<template>
  <div>
    <v-row>
      <v-icon large>
        mdi-application-cog-outline
      </v-icon>
      <v-card-title>Simulation Controls</v-card-title>
    </v-row>
    <v-row v-if="simulationStatus.status === 'unknown' || simulationStatus.status === 'not running'">
      <v-col style="text-align: center" cols="6">
        <v-btn color="green" @click="startStandaloneSimulation">
          Standalone
        </v-btn>
      </v-col>
      <v-col style="text-align: center" cols="6">
        <v-btn color="blue" @click="startManualSimulation">
          Manual
        </v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col v-if="simulationType === 'standalone'" style="text-align: center" cols="6">
        <v-btn :color="simulationStatus.status === 'running' ? 'orange' : 'green' " @click="pauseSimulation">
          {{ simulationStatus.status === 'paused' ? 'Resume' : 'Pause' }}
        </v-btn>
      </v-col>
      <v-col v-else-if="simulationType === 'manual'" style="text-align: center" cols="6">
        <v-btn color="blue" @click="tickSimulation">
          Tick
        </v-btn>
      </v-col>
      <v-col style="text-align: center" cols="6">
        <v-btn color="red" @click="stopSimulation">
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

  get simulationType (): string {
    return this.simulationStatus.status === 'manual' ? 'manual' : 'standalone'
  }

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

  startManualSimulation () {
    if (this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown') {
      this.$axios.post('http://localhost:8080/simulation/manual/start')
    }
  }

  startStandaloneSimulation () {
    if (this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown') {
      this.$axios.post('http://localhost:8080/simulation/standalone/start')
    }
  }

  tickSimulation () {
    this.$axios.post('http://localhost:8080/simulation/manual/tick')
  }

  pauseSimulation () {
    this.$axios.post(`http://localhost:8080/simulation/${this.simulationType}/pause`)
  }

  stopSimulation () {
    this.$axios.post(`http://localhost:8080/simulation/${this.simulationType}/stop`)
  }
}
</script>
