import SimpleTask from './classes/SimpleTask';
import proc from './functions/server';

let obj = {
  name: 'server',
  src: './build',
  proc: function() {
    return proc(this.src, this.watchDir);
  },
  watchDir: './build/**/*'
}

let task = new SimpleTask(obj);
task.execute();
