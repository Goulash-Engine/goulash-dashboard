import {Urges} from "~/types/urges";
import {State} from "~/types/state";
import {Activity} from "~/types/activity";

export class Actor {
  id: String
  conditions: Array<String>
  activities: Array<Activity>
  urges: Urges
  currentActivity: String
  state: State

  constructor(id: String, conditions: Array<String>, activities: Array<Activity>, urges: Urges, currentActivity: String, state: State) {
    this.id = id;
    this.conditions = conditions;
    this.activities = activities;
    this.urges = urges;
    this.currentActivity = currentActivity;
    this.state = state;
  }
}
