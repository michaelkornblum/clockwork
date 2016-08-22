/*jshint esversion: 6*/

import StreamTask from './classes/StreamTask';
import proc from './functions/vectors';

let obj = {
  name: 'vectors',
  src: './vectors/*.svg',
  proc,
  dest: './layouts/partials',
  watchDir: './vectors/**/*',
};

let task = new StreamTask(obj);
task.execute();
task.watch();
