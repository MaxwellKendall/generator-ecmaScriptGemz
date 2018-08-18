

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    // Make options available
    this.appName = this.config.get('appName');

    this.option('component', {
      desc: 'Use this name for to create container',
      type: String,
      default: 'Component',
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_Container.jsx'),
      this.destinationPath(`${this.appName}/src/containers/${this.options.component}Container.js`),
      {
        component: this.options.component
      });
  }
};
