export default class TaskStep {
  constructor(data = {}) {
    this.completed = data.completed || false;
    this.stepName = data.stepName || "";
  }
}