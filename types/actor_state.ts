export class ActorState {
  key: string
  state: Record<string, number>
  urges: Record<string, number>
  activity: string
  conditions: Array<string>

  constructor (key: string, state: Record<string, number>, urges: Record<string, number>, activity: string, conditions: Array<string>) {
    this.key = key
    this.state = state
    this.urges = urges
    this.activity = activity
    this.conditions = conditions
  }
}
