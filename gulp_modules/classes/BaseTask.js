export default class BaseTask {
  constructor(obj) {
    for(let prop in obj) {
      this[prop] = obj[prop];
    }
    if(!this.name) this.name = 'default';
    if(!this.deps) this.deps = '';
  }
}
