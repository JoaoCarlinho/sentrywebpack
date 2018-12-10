const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = {
  entry: ['./src/script.js'],
  output: {
    filename: 'bundle.js',
    path: __dirname+'/dist'
  },
  devtool:'source-map',
  plugins: [
    new SentryCliPlugin({
      include: '.',
      ignoreFile: '.sentrycliignore',
      ignore: ['node_modules', 'webpack.config.js'],
      configFile: 'sentry.properties',
      dryRun: true,
      release: 'first release',
    }),
  ],
};