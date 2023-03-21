const { resolve } = require('path');
const { loadAndBundleSpec } = require('redoc');

const validate = async function (pathToSpec) {
  try {
    const fullPath = resolve(pathToSpec);
    await loadAndBundleSpec(fullPath);
    return undefined;
  } catch (error) {
    return error.message;
  }
};

module.exports = validate;
