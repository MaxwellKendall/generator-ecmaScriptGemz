const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);
    this.appName = this.config.get('appName');
  }

  writing() {
    const { appName } = this;

    this.fs.copyTpl(
      this.templatePath('./gitignore'),
      this.destinationPath(`${appName}/.gitignore`)
    );

    this.fs.copyTpl(
      this.templatePath('./_package.json'),
      this.destinationPath(`${appName}/package.json`),
      {
        name: appName,
      }
    );

    this.fs.copy(
      this.templatePath('./babelrc'),
      this.destinationPath(`${appName}/.babelrc`)
    );
    this.fs.copy(
      this.templatePath('./bowerrc'),
      this.destinationPath(`${appName}/.bowerrc`)
    );

    this.fs.copy(
      this.templatePath('./_webpack.config.js'),
      this.destinationPath(`${appName}/webpack.config.js`)
    );

    this.fs.copy(
      this.templatePath('./_postcss.config.js'),
      this.destinationPath(`${appName}/postcss.config.js`)
    );

    this.fs.copy(
      this.templatePath('./_eslintrc.js'),
      this.destinationPath(`${appName}/.eslintrc.js`)
    );

    this.fs.copy(
      this.templatePath('./_stylelintrc'),
      this.destinationPath(`${appName}/.stylelintrc`)
    );

    this.fs.copy(
      this.templatePath('./_index.html'),
      this.destinationPath(`${appName}/index.html`)
    );

    this.fs.copy(
      this.templatePath('./src/_history/_configureHistory.js'),
      this.destinationPath(`${appName}/src/history/configureHistory.js`)
    );

    this.fs.copy(
      this.templatePath('./_index.js'),
      this.destinationPath(`${appName}/src/index.js`)
    );

    this.fs.copy(
      this.templatePath('./src/_store/_configureStore.js'),
      this.destinationPath(`${appName}/src/store/configureStore.js`)
    );

    this.fs.copy(
      this.templatePath('./src/_App.jsx'),
      this.destinationPath(`${appName}/src/components/App.jsx`)
    );

    this.fs.copy(
      this.templatePath('./src/_reducers/_index.js'),
      this.destinationPath(`${appName}/src/reducers/index.js`)
    );
  }

  install() {
    process.chdir(this.appName);
    this.log(yosay('installing your dependencies using yarn...'));
    this.installDependencies({ npm: false, bower: false, yarn: true });
  }
};
