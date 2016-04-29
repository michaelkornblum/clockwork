import StreamTask from './classes/StreamTask';
import proc from './functions/metalsmith';

let obj = {
  name: 'metalsmith',
  src: 'src/**/*',
  proc,
  dest: './build',
  watchDir: [
    './src/**/*',
    './layouts/**/*'
  ]
}

let task = new StreamTask(obj);
task.execute();
task.watch();
