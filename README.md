<h1>gar-yaml:  <i>load yaml interpolating env variables</i> </h1>


<h2>Usage</h2>

```yaml
# test.yml
DENO_ENV: ${{DENO_ENV}}
```

```ts
// index.ts
import { loadYaml } from 'https://deno.land/x/garn_yaml@v0.1.4/mod.ts';
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts';

const yamlObject = await loadYaml('./test.yml');
assertEquals(typeof yamlObject, 'object');
assertEquals(yamlObject.DENO_ENV, 'development');
```

```bash
deno run index.ts --allow-read --allow-env
```
