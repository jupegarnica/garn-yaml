import { parse  } from "https://deno.land/std@0.63.0/encoding/yaml.ts";

export function interpolateEnv(text:string):string {
    const regex = /\$\{\{([^\}]+)\}\}/g

    let output = text;
    const matches = text.match(regex);
    matches?.forEach(match => {
        const variable = match.replace( /(\$\{\{)|(\}\})|(\s)/g, '');
        output = output.replaceAll(match, Deno.env.get(variable) || match)
    })

    return output
}


export async function loadYaml(path:string, encoding = 'utf-8'): Promise<any> {

    const fileText = await Deno.readFile(path);

    const decoder = new TextDecoder(encoding);
    const yamlText = decoder.decode(fileText);
    const yamlInterpolated = interpolateEnv(yamlText)

    const object = await parse(yamlInterpolated);
    return object;
}
