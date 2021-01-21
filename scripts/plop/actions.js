const globby = require('globby');
const fse = require('fs-extra');
const replaceInFiles = require('replace-in-files');

const copyFiles = async (
  _,
  config,
  __
) => {
  const configData = config.data;

  const allFiles = await globby([configData.source], {
    gitignore: true,
    dot: true,
  });
  for (let fileName of allFiles) {
    const destFileName = fileName.replace(configData.source, configData.dest);
    console.log(`- ${destFileName}`);
    await fse.copy(fileName, destFileName);
  }

  for (let key in configData.replaceInFiles) {
    await replaceInFiles({
      files: [`${configData.dest}/**/*`, `${configData.dest}/*`],
      from: new RegExp(key, 'g'),
      to: configData.replaceInFiles[key],
    });
  }

  return await Promise.resolve('success');
};

module.exports = copyFiles;
