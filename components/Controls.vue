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
        <v-btn :color="simulationStatus == 'running' ? 'orange' : 'green' " @click="startSimulation">
          {{ buttonLabel() }}
        </v-btn>
      </v-col>
      <v-col style="text-align: center" cols="6">
        <v-btn :disabled="simulationStatus == 'not running'" color="red" @click="stopSimulation">
          Stop
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class Controls extends Vue {
  @Prop({ type: String, required: true })
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
}
</script>
