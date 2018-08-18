

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this.appName = this.config.get('appName');
    this.option('name', {
      desc: 'Use this name for component generator',
      type: String,
      defaults: 'Component'
    });

    this.option('path', {
      desc: 'path for component begining with src/components',
      type: String,
      defaults: 'src/components'
    });

    this.option('flux', {
      desc: 'Determines if corresponding container is generated for a component',
      type: Boolean,
      defaults: true
    });

    this.option('route', {
      desc: 'Determines if corresponding route is generated for container',
      type: Boolean,
      defaults: true
    });

    this.option('url', {
      desc: 'If route is generated, what should the path be',
      type: String,
      defaults: '/'
    });

    this.config.save();
}

  prompting() {
  }

  writing() {

    const componentDestination = this.options.path !== 'src/components'
      ? `src/components/${this.options.path}/${this.options.name}.jsx`
      : `${this.options.path}/${this.options.name}.jsx`;

    this.fs.copyTpl(
      this.templatePath('_Component.jsx'),
      this.destinationPath('src/components/' + this.options['name'] + '.jsx'),
      {
        name: this.options['name'],
      },
    );

    this.options.flux ? this.fs.copyTpl(
      this.templatePath('_Container.jsx'),
      this.destinationPath(`src/containers/${this.options['name']}Container.jsx`),
        {
          name: this.options['name'],
          path: componentDestination,
        }
        ) : null;

    this.options.flux && this.options.route ? this.fs.copyTpl(
      this.templatePath('_App.jsx'),
      this.destinationPath('src/components/App.jsx'),
      {
        name: this.options['name'],
        url: this.options['url'],
        flux: this.options['flux'],
      }
    ) : null;
  }
};
