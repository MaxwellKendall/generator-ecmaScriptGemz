
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this.appName = this.config.get('appName');

    this.option('name', {
      desc: 'Use this name for test generator',
      type: String,
      defaults: 'Component'
    });

    this.option('path', {
      desc: 'path for test begining from root/__tests__',
      type: String,
    });

    this.option('component', {
      desc: 'Will generate test for a component',
      type: Boolean,
      defaults: true
    });

    this.option('action', {
      desc: 'Will generate test for an action',
      type: Boolean,
      defaults: false
    });

    this.option('reducer', {
      desc: 'Will generate test for a reducer',
      type: Boolean,
      defaults: false
    });


    this.config.save();
  }

  writing() {
    const { appName } = this;

    if (this.config.get('init') === true) {
      this.fs.copyTpl(
        this.templatePath('./_testSetUp.js'),
        this.destinationPath(`${appName}/testSetUp.js`)
      );

      this.fs.copyTpl(
        this.templatePath('App.spec.js'),
        this.destinationPath(`${appName}/__tests__/components/App.spec.js`)
      );
      this.config.set('init', false);
    }

    const componentDestination = this.options.path
      ? `${this.appName}/__tests__/component/${this.options.path}/${this.options.name}.spec.js`
      : `${this.appName}/__tests__/component/${this.options.name}.spec.js`;

    const actionDestination = this.options.path
      ? `${this.appName}/__tests__/actions/${this.options.path}/${this.options.name}.spec.js`
      : `${this.appName}/__tests__/actions/${this.options.name}.spec.js`;

    const reducerDestination = this.options.path
      ? `${this.appName}/__tests__/reducers/${this.options.path}/${this.options.name}.spec.js`
      : `${this.appName}/__tests__/reducers/${this.options.name}.spec.js`;


    this.fs.copyTpl(
      this.templatePath('_Component.js'),
      this.destinationPath(componentDestination),
      {
        name: this.options.name,
      }
    );

    if (this.options.action) {
      this.fs.copyTpl(
        this.templatePath('_reducer.js'),
        this.destinationPath(reducerDestination),
        {
          name: this.options.name,
          path: reducerDestination,
        }
      );
      this.fs.copyTpl(
        this.templatePath('_action.js'),
        this.destinationPath(actionDestination),
        {
          name: this.options.name,
          path: actionDestination,
        }
      );
    }
  }
};
