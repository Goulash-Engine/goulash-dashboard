<template>
  <v-card color="blue lighten-2" light>
    <v-row class="pl-3">
      <v-card-title>Name: {{ actor.name }}</v-card-title>
    </v-row>
    <v-row class="px-3 pb-2">
      <v-col>
        <v-simple-table class="blue darken-2" dark dense>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">
                  Urge
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, urge) in actor.urges" :key="urge.toString() + actor.id">
                <td>{{ urge }}</td>
                <td>{{ value.toFixed(2) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col>
        <v-simple-table class="blue darken-1" dark dense>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">
                  State
                </th>
                <th class="text-left">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, state) in actor.state" :key="state.toString() + actor.id">
                <td>{{ state }}</td>
                <td>{{ value.toFixed(2) }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ActorState } from '../types/actor_state'

@Component
export default class ActorDetail extends Vue {
  @Prop({ type: ActorState, required: true })
  actor: ActorState;
}
</script>
