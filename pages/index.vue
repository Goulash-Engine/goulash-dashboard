<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="px-5 pt-1 pb-5">
        <v-row justify="center">
          <v-card-title>Simulation Controls</v-card-title>
        </v-row>
        <v-row justify="center">
          <v-card-subtitle>Status: {{ simulationStatus }}</v-card-subtitle>
        </v-row>
        <v-row justify="space-around">
          <v-btn @click="startSimulation">Start</v-btn>
          <v-btn @click="pauseSimulation">Pause</v-btn>
          <v-btn @click="stopSimulation">Stop</v-btn>
        </v-row>
      </v-card>
      <div class="pt-5"></div>
      <v-card>
        <v-row justify="center">
          <v-card-title>Goulash-Dashboard</v-card-title>
        </v-row>
        <v-row justify="center">
          <goulash-container></goulash-container>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {Component, Vue} from "nuxt-property-decorator";

@Component
export default class Index extends Vue {
  simulationStatus: string = 'unknown'

  startSimulation() {
    this.$axios.post("http://localhost:8080/simulation/start");
  }

  pauseSimulation() {
    this.$axios.post("http://localhost:8080/simulation/pause");
  }

  stopSimulation() {
    this.$axios.post("http://localhost:8080/simulation/stop");
  }

  mounted() {
    setInterval(() => {
      this.$axios.get("http://localhost:8080/simulation/status").then(response => {
        this.simulationStatus = response.data;
      });
    }, 1000);
  }
}
</script>
