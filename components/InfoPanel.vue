<template>
  <div>
    <v-row>
      <v-icon large>
        mdi-information
      </v-icon>
      <v-card-title>Simulation Info</v-card-title>
    </v-row>
    <v-row>
      <v-card color="grey darken-2">
        <v-card-text>
          <div class="text-h6">
            Status: {{ simulationStatus.status }}
          </div>
<!--          <div class="text-caption">-->
<!--            Date: {{ dateFormatted() }}-->
<!--          </div>-->
<!--          <div class="text-caption">-->
<!--            Time: {{ timeFormatted() }}-->
<!--          </div>-->
          <div class="text-caption">
            Ticks: {{ simulationStatus.ticks }}
          </div>
        </v-card-text>
      </v-card>
    </v-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { WorldDate } from '../types/worlddate'
import SimulationStatus from '../types/simulationstatus'

@Component
export default class InfoPanel extends Vue {
  @Prop({ type: Object as () => SimulationStatus, required: true })
  simulationStatus: SimulationStatus

  worldDate?: WorldDate = null

  dateFormatted (): string {
    return `${this.worldDate?.day} days ${this.worldDate?.month} months ${this.worldDate?.year} years`
  }

  timeFormatted (): string {
    return `${this.worldDate?.time.hours}h ${this.worldDate?.time.minutes}m ${this.worldDate?.time.seconds}s`
  }

  mounted () {
    setInterval(() => {
      // this.fetchTime()
    }, 1000)
  }

  // async fetchTime () {
  //   this.worldDate = await this.$axios.$get('http://localhost:8080/simulation/standalone/time')
  // }
}
</script>
