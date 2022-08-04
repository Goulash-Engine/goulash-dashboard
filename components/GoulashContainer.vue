<template>
  <div >
    <actor-detail v-for="actor in actors" :actor="actor" class="ma-3"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {ActorState} from "../types/actor_state";
import {Activity} from "../types/activity";
import {Urges} from "../types/urges";
import {State} from "../types/state";

@Component
export default class GoulashContainer extends Vue {
  actors: Array<ActorState> = [
    new ActorState("123", "foo", {"health": 100.0}, {"eat": 100.0}, "working", ["rested"]),
    new ActorState("123", "foo", {"health": 100.0}, {"eat": 100.0}, "working", ["rested"]),
    new ActorState("123", "foo", {"health": 100.0}, {"eat": 100.0}, "working", ["rested"]),
    new ActorState("123", "foo", {"health": 100.0}, {"eat": 100.0}, "working", ["rested"])
  ]
}

</script>

