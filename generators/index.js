const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this.config.save();
  }

  prompting() {
    this.log(yosay(`Welcome to this private generator for generating a ${chalk.red('React')} app`));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What would you like to name your app ?',
        default: 'App',
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
      this.config.set('appName', this.props.name);
    });
  }

  initializing() {
    this.log(yosay('Enjoy this...'));
  }

  install() {
    this.config.set('init', true);
    this.composeWith('ecmaScriptGemz:app');
    this.composeWith('ecmaScriptGemz:scss');
    this.composeWith('ecmaScriptGemz:container');
    this.composeWith('ecmaScriptGemz:action');
    this.composeWith('ecmaScriptGemz:reducer');
    this.composeWith('ecmaScriptGemz:test');
  }
};
