export default class SimulationStatus {
  status: string
  ticks: number

  constructor (status: string, ticks: number = 0) {
    this.status = status
    this.ticks = ticks
  }
}
