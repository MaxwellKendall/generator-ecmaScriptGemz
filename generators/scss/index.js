
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    // Make options available
    this.appName = this.config.get('appName');
  }

  writing() {
    this.fs.copy(
      this.templatePath('_global.scss'),
      this.destinationPath(`${this.appName}/src/scss/global.scss`)
    );
  }
};
