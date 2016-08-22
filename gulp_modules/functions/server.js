/*jshint esversion: 6*/

import { watch } from 'gulp';
import { create, init, reload } from 'browser-sync';

export default function(baseDir, watchDir) {
  create();
  init({
    server: {
      baseDir,
    },
  });
  watch(watchDir, reload);
}
