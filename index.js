const core = require('@actions/core');
const validate = require('./validate');

async function run() {
  const openapiFile = core.getInput('openapi-file');
  core.info(`Validating file ${openapiFile}`);
  const errors = await validate(openapiFile);
  if (errors !== undefined) {
    core.error(errors);
    core.setFailed(errors.message);
  }
}

run();
