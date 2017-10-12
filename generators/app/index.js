'use strict';
const generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = generator.extend({
  prompting() {
    this.log(
      yosay('Welcome to ' + chalk.yellow('generator-tuba-react-ts') + ' generator!')
    );
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name your project?',
        default: this.appname
      },
      {
        type: 'input',
        name: 'version',
        message: 'What version number is your project?',
        default: '0.0.0'
      }
    ]).then(
      function(answers) {
        this.props = answers;
      }.bind(this)
    );
  },
  writing: {
    config() {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: this.props.name,
          version: this.props.version
        }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        {
          name: this.props.name,
          version: this.props.version
        }
      );
      this.fs.copy(this.templatePath('bowerrc'), this.destinationPath('.bowerrc'));
      this.fs.copy(
        this.templatePath('_webpack.config.js'),
        this.destinationPath('webpack.config.js')
      );
      this.fs.copy(this.templatePath('babelrc'), this.destinationPath('.babelrc'));
      this.fs.copy(
        this.templatePath('_tsconfig.json'),
        this.destinationPath('tsconfig.json')
      );
      this.fs.copy(this.templatePath('.npmignore'), this.destinationPath('.gitignore'));
    },
    app() {
      this.fs.copyTpl(
        this.templatePath('_server/index'),
        this.destinationPath('server.index.js'),
        {
          name: this.props.name
        }
      );
      this.fs.copy(
        this.templatePath('_server/app.js'),
        this.destinationPath('server/app.js')
      );
      this.fs.copyTpl(this.templatePath('index'), this.destinationPath('index.html'), {
        name: this.props.name
      });
      this.fs.copy(
        this.templatePath('_src/index.tsx'),
        this.destinationPath('src/index.tsx')
      );
      this.fs.copy(
        this.templatePath('_src/_components/App.tsx'),
        this.destinationPath('src/components/App.tsx')
      );
    }
  },
  install() {
    this.installDependencies();
  }
});
