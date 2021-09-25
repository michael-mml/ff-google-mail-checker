/* eslint-disable no-undef */
// web-ext configuration file
// all web-ext commands are run with the following options
module.exports = {
  // Global options
  verbose: true,
  ignoreFiles: [
    // remove all files that are not required for running the extension
    '**/*/*.ts'
  ],
  sourceDir: 'build',
  artifactsDir: 'build/web-ext-artifacts',

  // Per-command options
  build: {
    overwriteDest: true,
  },
  run: {
    startUrl: ['about:debugging'],
    firefox: '/opt/firefox/firefox'
  }
};
