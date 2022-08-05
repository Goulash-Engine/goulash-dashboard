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
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { WorldDate } from '../types/worlddate'

@Component
export default class InfoPanel extends Vue {
  @Prop({ type: String, required: true })
  simulationStatus: string = 'unknown'

  worldDate?: WorldDate = null

  dateFormatted (): string {
    return `${this.worldDate?.day} days ${this.worldDate?.month} months ${this.worldDate?.year} years`
  }

  timeFormatted (): string {
    return `${this.worldDate?.time.hours}h ${this.worldDate?.time.minutes}m ${this.worldDate?.time.seconds}s`
  }

  mounted () {
    setInterval(() => {
      this.fetchTime()
    }, 1000)
  }

  async fetchTime () {
    this.worldDate = await this.$axios.$get('http://localhost:8080/simulation/time')
  }
}
</script>
