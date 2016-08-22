/*jshint esversion: 6*/

import combiner from 'stream-combiner';
import _g from 'gulp-load-plugins';

export default function() {
  return combiner(
    _g().svgmin(),
    _g().svgSymbols({
      templates: ['default-svg'],
    })
  );
}
