<template>
  <v-row class="mt-2">
    <v-col v-for="actor in actors" :key="actor.id" cols="3">
      <actor-detail :actor="actor" class="pb-2 mx-2" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { ActorState } from '../types/actor_state'

@Component
export default class GoulashContainer extends Vue {
  actors: Array<ActorState> = []

  mounted () {
    setInterval(() => {
      this.fetchActors()
    }, 1000)
  }

  async fetchActors () {
    const status = await this.$axios.$get('http://localhost:8080/simulation/status')
    if (status !== 'running') {
      return
    }
    this.$axios.get('http://localhost:8080/actors?container=root').then((response) => {
      this.actors = response.data
    })
  }
}

</script>
