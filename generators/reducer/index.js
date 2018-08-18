

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    // Make options available
    this.appName = this.config.get('appName');

    this.option('name', {
      desc: 'Use this name for to create action',
      type: String,
      default: 'reducer',
    });

    this.option('state', {
      desc: 'Use this name for to create state property to be altered by action',
      type: String,
      default: 'stateProperty',
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_reducer.js'),
      this.destinationPath(`${this.appName}/src/reducers/${this.options.name}.js`),
      {
        name: this.options.name,
        state: this.options.state,
      });
  }
};
