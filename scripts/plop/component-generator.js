const { pascalCase } = require('lodash');

const componentGenerator = () => {
  const prompts = [
    {
      type: 'input',
      name: 'componentName',
      message: 'Component name (package-name)',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Component description',
    },
  ];
  const actions = ({ componentName, description }) => {
    return [
      {
        type: 'copy-files',
        data: {
          source: 'scripts/plop/template/component',
          dest: `packages/${componentName}`,
          replaceInFiles: {
            '@w-labs/template': `@w-labs/${componentName}`,
            'React component template': description,
            Template: PascalCase(componentName),
          },
        },
      },
    ];
  };

  return {
    description: 'Component Generator',
    prompts,
    actions,
  };
};

module.exports = componentGenerator;
