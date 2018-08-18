
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.appName = this.config.get('appName');

    this.option('actionName', {
      desc: 'Use this name for to create action',
      type: String,
      defaults: 'action'
    }); 

    this.option('componentName', {
      desc: 'Name of component you are connecting',
      type: String,
      defaults: 'Component'
    });
    this.config.save();
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath('_action.js'),
      this.destinationPath(`${this.appName}/src/actions/${this.options.actionName}.js`),
      {
        actionName: this.options.actionName,
        actionNameCaps: this.options.actionName.toUpperCase(),
      }
    );
  }
};
