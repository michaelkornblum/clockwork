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
        site: 'data/site.json'
      }),
      _m().markdown({
        gfm: true
      }),
      _m().inPlace({
        engine: 'jade',
        _,
        _s,
        moment,
        rename: true,
        pretty: true
      }),
      _m().collections({
        posts: {
          pattern: 'posts/**/*.html',
          sortBy: 'date',
          reverse: true
        },
        pages: {
          pattern: '!posts/**/*.html'
        }
      }),
      _m().permalinks({
        linksets: [
          {
            match: {collection: 'posts'},
            pattern: 'posts/:date/:title',
            relative: false
          },
          {
            match: {collection: true},
            pattern: ':title',
            relative: false
          }
        ]
      }),
      _m().layouts({
        engine: 'jade',
        default: 'default.jade',
        _,
        _s,
        moment,
        pretty: true
      })
    ]
  });
}
