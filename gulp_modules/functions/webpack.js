import webpack from 'webpack-stream';

export default function() {
  return webpack(require('../../webpack.config.js'));
}
