/*jshint esversion: 6*/

import metalsmith from 'gulp-metalsmith';
import _m from 'load-metalsmith-plugins';

// javascript libraries for jade
import _s from 'underscore.string';
import _ from 'lodash';
import moment from 'moment';

export default function() {
  return metalsmith({
    use: [
      _m().metadata({
        site: 'data/site.json',
      }),
      _m().markdown({
        gfm: true,
      }),
      _m().inPlace({
        engine: 'pug',
        _,
        _s,
        moment,
        rename: true,
        pretty: true,
        basedir: '/home/michael/Projects/open_avenues/src/content',
      }),
      _m().collections({
        posts: {
          pattern: 'posts/**/*.html',
          sortBy: 'date',
          reverse: true,
        },
        pages: {
          pattern: '!posts/**/*.html',
        },
      }),
      _m().permalinks({
        linksets: [
          {
            match: { collection: 'posts' },
            pattern: 'posts/:date/:title',
            relative: false,
          },
          {
            match: { collection: true },
            pattern: ':title',
            relative: false,
          },
        ],
      }),
      _m().layouts({
        engine: 'pug',
        default: 'default.pug',
        _,
        _s,
        moment,
        pretty: false,
      }),
    ],
  });
}
