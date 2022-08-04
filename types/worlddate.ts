import { WorldTime } from '~/types/worldtime'

export class WorldDate {
  day: number
  month: number
  year: number
  time: WorldTime

  constructor (day: number, month: number, year: number, time: WorldTime) {
    this.day = day
    this.month = month
    this.year = year
    this.time = time
  }
}
