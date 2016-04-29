import StreamTask from './classes/StreamTask';
import proc from './functions/webpack';

let obj = {
  name: 'webpack',
  src: './scripts/app.js',
  proc,
  dest: './build/scripts/',
  watchDir: [
    'scripts/**/*.js',
    'scripts/**/*.coffee',
    'scripts/**/*.es6'
  ]
}

let task = new StreamTask(obj);
task.execute();
task.watch();
