const { camelCase } = require('lodash');

const hookGenerator = () => {
  const prompts = [
    {
      type: 'input',
      name: 'hookName',
      message: 'Hook name (package-name)',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Hook description',
    },
  ];
  const actions = ({ hookName, description }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'scripts/plop/template/hook',
          dest: `packages/${hookName}`,
          replaceInFiles: {
            '@w-labs/functions': `@w-labs/${hookName}`,
            'React hook template': description,
            useTemplate: camelCase(hookName),
          },
        },
      },
    ];
  };

  return {
    description: 'Hook Generator',
    prompts,
    actions,
  };
};

module.exports = hookGenerator;
