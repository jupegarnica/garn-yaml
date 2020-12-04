<h1>gar-yaml:  <i>load yaml interpolating env variables</i> </h1>


<h2>Example</h2>

```ts
import { loadYaml } from './mod.ts';
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts';

const yamlObject = await loadYaml('./test.yml');
assertEquals(typeof yamlObject, 'object');
assertEquals(yamlObject.DENO_ENV, 'development');
```
