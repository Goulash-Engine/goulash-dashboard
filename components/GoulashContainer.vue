<template>
  <div>
    <actor-detail v-for="actor in actors" :key="actor.id" :actor="actor" class="ma-3" />
  </div>
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
