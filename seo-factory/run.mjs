import {readFile,mkdir,writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";
import {build} from "./build.mjs";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const data=JSON.parse(await readFile(path.join(root,"seo-factory/seed.json"),"utf8"));
const output=build(data);
for(const [name,content] of Object.entries(output)){
  const target=path.join(root,name);
  await mkdir(path.dirname(target),{recursive:true});
  await writeFile(target,content,"utf8");
}
console.log("Generated",Object.keys(output).length,"files for",data.issues.length,"issues");
