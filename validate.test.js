const validate = require('./validate');

test('validates valid openapi file', async () => {
  return expect(validate('./fixtures/valid_openapi.yml')).resolves.toEqual(undefined);
});

test('validates invalid openapi file', async () => {
  return expect(validate('./fixtures/invalid_openapi.yml')).resolves.toContain(
    'Error opening file'
  );
});
