import gulp from 'gulp';
import watch from 'gulp-watch';
import BaseTask from './BaseTask';

export default class SimpleTask extends BaseTask {
  execute() {
    return gulp.task(this.name, this.deps, () => {
      this.proc();
    });
  }
  watch() {
    return gulp.task(`watch:${this.name}`, () => {
      gulp.src(this.watchDir)
      .pipe(watch(this.watchDir, () => {
        gulp.start(this.name);
      }));
    });
  }
}
