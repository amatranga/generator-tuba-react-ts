'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tuba-react-ts:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({ someAnswer: true });
  });

  it('creates public files', () => {
    assert.file('index.html');
  });
  it('creates client files', () => {
    assert.file(['client/src/index.tsx', 'client/src/components/App.tsx']);
  });
  it('creates server files', () => {
    assert.file(['server/index.js', 'server/app.js']);
  });
  it('creates other root level files', () => {
    assert.file([
      'bower.json',
      'package.json',
      'tsconfig.json',
      '.gitignore',
      '.bowerrc',
      '.babelrc',
      'webpack.config.js'
    ]);
  });
});
