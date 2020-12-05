import { writeYaml } from "./mod.ts";

const data = {a: 1, b: 2};
await writeYaml('./write-test.yml', data);
