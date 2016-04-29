import SimpleTask from './classes/SimpleTask';
import proc from './functions/default';

let obj = {
  tasks: [
    'clean',
    'metalsmith',
    'styles',
    'webpack',
    'images',
    'server',
    [
      'watch:metalsmith',
      'watch:styles',
      'watch:webpack',
      'watch:images'
    ]
  ],
  proc: function() {
    return proc(this.tasks);
  }
}

let task = new SimpleTask(obj);
task.execute();
