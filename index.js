const xtpl = require('xtpl');
const helper = require('think-helper');
const renderFile = helper.promisify(xtpl.renderFile, xtpl);

module.exports = class {
  constructor(viewFile, viewData, config) {
    this.viewFile = viewFile;
    this.viewData = viewData;
    this.handleOptions = config.options;
    xtpl.config(this.handleOptions);
  }

  render() {
    if (helper.isFunction(this.config.beforeRender)) {
      this.config.beforeRender(xtpl, this.handleOptions);
    }

    return renderFile(this.viewFile, this.viewData, this.handleOptions);
  }
};
