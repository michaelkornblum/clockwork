import SimpleTask from './classes/SimpleTask';
import proc from './functions/clean';

let obj = {
  name: "clean",
  src: "./build",
  proc: function() {
    return proc(this.src);
  }
}

let task = new SimpleTask(obj);
task.execute();
