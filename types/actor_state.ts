export class ActorState {
  id: string
  name: string
  state: Record<string, number>
  urges: Record<string, number>
  activity: string
  conditions: Array<string>

  constructor(id: string, name: string, state: Record<string, number>, urges: Record<string, number>, activity: string, conditions: Array<string>) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.urges = urges;
    this.activity = activity;
    this.conditions = conditions;
  }
}
