import imagemin from 'gulp-imagemin';

export default function() {
  return imagemin({
    optimizationLevel: 3,
    progressive: true,
    interlaced: true
  });
}
