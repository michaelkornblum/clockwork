import StreamTask from './classes/StreamTask';
import proc from './functions/images';

let obj = {
  name: 'images',
  src: './images/**/*',
  proc,
  dest: './build/images',
  watchDir: './images/**/*'
}

let task = new StreamTask(obj);
task.execute();
task.watch();
