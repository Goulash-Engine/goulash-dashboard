<template>
  <v-card color="blue darken-2" light>
    <v-container>
      <v-row class="py-3" align="center" justify="space-around">
        <div class="text-body-2">
          Key: <span class="font-weight-bold">{{ actor.key }}</span>
        </div>
        <v-btn style="pointer-events: none " depressed color="green lighten-2" x-small>
          {{ actor.activity }}
        </v-btn>
      </v-row>
      <v-row justify="center">
        <v-simple-table class="blue" light dense>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">
                  State
                </th>
                <th class="text-right">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, state) in actor.state" :key="state.toString() + actor.id">
                <td>{{ state }}</td>
                <td class="text-right">
                  {{ value.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
      <v-row>
        <v-col style="text-align: center">
          <v-btn
            v-for="condition in actor.conditions"
            :key="actor.id + condition"
            style="pointer-events: none"
            class="ma-1"
            x-small
            color="purple lighten-2"
          >
            {{ condition }}
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="pt-2" justify="center">
        <v-simple-table class="blue lighten-2" light dense>
          <template #default>
            <thead>
              <tr>
                <th class="text-left">
                  Urge
                </th>
                <th class="text-right">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, urge) in actor.urges" :key="urge.toString() + actor.id">
                <td>
                  {{ urge }}
                </td>
                <td class="text-right">
                  {{ value.toFixed(2) }}
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-row>
    </v-container>
  </v-card>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ActorState } from '../types/actor_state'

@Component
export default class ActorDetail extends Vue {
  @Prop({ type: Object as () => ActorState, required: true })
  actor: ActorState;
}
</script>
