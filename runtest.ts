import { writeYaml } from 'https://deno.land/x/garn_yaml@0.2.1/mod.ts';

const yamlText = await writeYaml('./write-test.yml', { a: 1 }); // a: 1

console.log(yamlText);
