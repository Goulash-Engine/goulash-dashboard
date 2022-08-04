<template>
  <v-card color="purple">
    <v-card-title>Actor</v-card-title>
    <v-card-subtitle>{{ actor.id }}</v-card-subtitle>
    <v-card-text>
      <v-list class="pa-2" dense>
        <v-list-item-title>Urges:</v-list-item-title>
        <v-list-item v-for="(value, urge) in actor.urges.urges">{{ urge }}: {{ value }}</v-list-item>
        <v-list-item>Health: {{ actor.state.health }}</v-list-item>
        <v-list-item>Nourishment: {{ actor.state.nourishment }}</v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "nuxt-property-decorator";
import {Actor} from "../types/actor";

@Component
export default class ActorDetail extends Vue {
  @Prop({type: Actor, required: true})
  actor: Actor;
}
</script>
