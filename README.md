<h1>gar-yaml:  <i>read or write yaml interpolating env variables</i> </h1>

![deno.land/x/garn-yaml](https://deno.land/x/garn_yaml)


![Test](https://github.com/jupegarnica/garn-yaml/workflows/Test/badge.svg)
<h2>Usage</h2>

```yaml
# read.yml
DENO_ENV: ${{DENO_ENV}}
```

```ts
// read.ts
import { readYaml } from 'https://deno.land/x/garn_yaml@0.2.1/mod.ts';
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts';

const yamlObject = await readYaml('./read.yml');
assertEquals(typeof yamlObject, 'object');
assertEquals(yamlObject.DENO_ENV, 'development');
```

```bash
DENO_ENV=development deno run read.ts --allow-read --allow-env
```

```ts
// write.ts
import { writeYaml } from 'https://deno.land/x/garn_yaml@0.2.1/mod.ts';

const yamlText = await writeYaml('./write.yml', { a: 1 }); // a: 1
```

```yaml
# write.yml
a: 1
```