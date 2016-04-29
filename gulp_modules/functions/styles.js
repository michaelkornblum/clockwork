import combiner from 'stream-combiner';
import _g from 'gulp-load-plugins';
// stylus plugins
import nib from 'nib';
import typographic from 'typographic';
import rupture from 'rupture';
import poststylus from 'poststylus';

export default function() {
  return combiner(
    _g().stylus({
      use: [
        nib(),
        rupture(),
        typographic(),
        poststylus(
          [
            'lost',
            'autoprefixer',
            'rucksack-css'
          ]
        )
      ]
    }),
    _g().csso()
  );
}
