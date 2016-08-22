/*jshint esversion: 6*/

import gulp from 'gulp';
import SimpleTask from './SimpleTask';

export default class StreamTask extends SimpleTask {
  execute() {
    return gulp.task(this.name, this.deps, () => {
      return gulp.src(this.src)
      .pipe(this.proc())
      .pipe(gulp.dest(this.dest));
    });
  }
}
