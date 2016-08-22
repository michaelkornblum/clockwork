/*jshint esversion: 6*/

import StreamTask from './classes/StreamTask';
import proc from './functions/styles';

let obj = {
  name: 'styles',
  src: './styles/main.styl',
  proc,
  dest: './build/styles/',
  watchDir: './styles/**/*',
};

let task = new StreamTask(obj);
task.execute();
task.watch();
