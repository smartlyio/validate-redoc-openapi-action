# validate-redoc-openapi-action

This action validates that openapi file can be rendered with redoc

## Inputs

### `openapi-file`

**Required** Location of the openapi file to validate. Default `openapi/openapi.yml`.

The time we greeted you.

## Example usage

```yaml
uses: smartlyio/validate-redoc-openapi-action@v1
with:
  openapi-file: 'dist/openapi.yml'
```
