<template>
  <div>
    <v-row>
      <v-icon large>
        mdi-application-cog-outline
      </v-icon>
      <v-card-title>Actor Controls</v-card-title>
    </v-row>
    <v-row>
      <v-col class="justify-center" cols="6">
        <v-text-field
          v-model="key"
          dense
          outlined
          label="Actor Key"
        />
      </v-col>
      <v-col style="text-align: center" cols="6">
        <v-btn :disabled="isNotRunning()" :color="isNotRunning() ? 'orange' : 'green' " @click="addActor">
          Create
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import SimulationStatus from '../types/simulationstatus'

@Component
export default class AddActor extends Vue {
  @Prop({ type: Object as () => SimulationStatus, required: true })
  simulationStatus: SimulationStatus

  key: string = ''

  isNotRunning (): boolean {
    return this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown'
  }

  addActor () {
    if (this.simulationStatus.status === 'not running' || this.simulationStatus.status === 'unknown') {
      return
    }
    if (this.key === '') {
      return
    }
    this.$axios.post(`http://localhost:8080/actors/${this.key}`)
  }
}
</script>
