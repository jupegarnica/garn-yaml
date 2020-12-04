import { loadYaml, interpolateEnv } from './mod.ts';
import { assertEquals } from 'https://deno.land/std@0.79.0/testing/asserts.ts';



Deno.test('Must interpolate one environment variable',  () => {
  const interpolated =  interpolateEnv('${{DENO_ENV}}');
  assertEquals(interpolated, 'development');
});

Deno.test('Must interpolate more than one environment variable',  () => {
  const interpolated =  interpolateEnv('${{DENO_ENV}} ${{DENO_ENV}}');
  assertEquals(interpolated, 'development development');
});

Deno.test('Must interpolate keep it as is if env not found',  () => {
  const interpolated =  interpolateEnv('${{DENO_ENV}} ${{TEST}}');
  assertEquals(interpolated, 'development ${{TEST}}');
});

Deno.test('Must work with default encoding to utf-8', async () => {
  const yamlObject = await loadYaml('./test.yml');
  assertEquals(typeof yamlObject, 'object');
  assertEquals(yamlObject.DENO_ENV, 'development');
});
