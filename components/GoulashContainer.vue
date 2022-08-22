<template>
  <v-row class="mt-2">
    <v-col v-for="actor in actors" :key="actor.id" cols="12" sm="5" md="4" lg="3">
      <actor-detail :actor="actor" class="pb-2 mx-2" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ActorState } from '../types/actor_state'
import SimulationStatus from '../types/simulationstatus'

@Component
export default class GoulashContainer extends Vue {
  actors: Array<ActorState> = []

  mounted () {
    setInterval(() => {
      this.fetchActors()
    }, 1000)
  }

  async fetchActors () {
    const simuationStatus: SimulationStatus = await this.$axios.$get('http://localhost:8080/simulation/status')
    if (simuationStatus.status === 'not running') {
      return
    }
    this.$axios.get('http://localhost:8080/actors?container=root').then((response) => {
      this.actors = response.data
    })
  }
}

</script>
