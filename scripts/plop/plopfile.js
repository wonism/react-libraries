const componentGenerator = require('./component-generator');
const hookGenerator = require('./hook-generator');
const copyFiles = require('./actions');

const plop = (plop) => {
  plop.setActionType('copy-files', copyFiles);

  plop.setGenerator('component', componentGenerator(plop));
  plop.setGenerator('hook', hookGenerator(plop));
};

module.exports = plop;
