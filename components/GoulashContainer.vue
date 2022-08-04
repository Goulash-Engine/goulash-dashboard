<template>
  <v-container fluid>
    <v-row justify="center">
      <template v-for="actor in actors">
        <actor-detail :actor="actor" class="ma-3"/>
      </template>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {Actor} from "../types/actor";
import {Activity} from "../types/activity";
import {Urges} from "../types/urges";
import {State} from "../types/state";

@Component
export default class GoulashContainer extends Vue {
  actors: Array<Actor> = [
    new Actor("123", ["tired", "hungry"], [new Activity()], new Urges({"eat": 100.0}), "working", new State(100.0, 60.0)),
    new Actor("123", ["tired", "hungry"], [new Activity()], new Urges({"eat": 100.0}), "working", new State(100.0, 60.0)),
    new Actor("123", ["tired", "hungry"], [new Activity()], new Urges({"eat": 100.0}), "working", new State(100.0, 60.0)),
    new Actor("123", ["tired", "hungry"], [new Activity()], new Urges({"eat": 100.0}), "working", new State(100.0, 60.0))
  ]
}

</script>

