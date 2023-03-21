const validate = require('./validate');

const fixturePath = `${__dirname}/fixtures`;
test('validates valid openapi file', async () => {
  return expect(validate(`${fixturePath}/valid_openapi.yml`)).resolves.toEqual(undefined);
});

test('validates invalid openapi file', async () => {
  return expect(validate(`${fixturePath}/invalid_openapi.yml`)).resolves.toContain(
    'Cannot read properties'
  );
});
