const { loadAndBundleSpec } = require('redoc');

const validate = async function (pathToSpec) {
  try {
    await loadAndBundleSpec(pathToSpec);
    return undefined;
  } catch (error) {
    return error.message;
  }
};

module.exports = validate;
