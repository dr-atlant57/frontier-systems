// Generated source map sync: run after modifying seed.json
import {readFile,writeFile} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const seed=JSON.parse(await readFile(path.join(root,"seo-factory/seed.json"),"utf8"));
const dest=path.join(root,"audit/index.html");
const html=await readFile(dest,"utf8");
const map={};
for(const p of seed.issues)map[p.slug]={title:p.ru.title,group:p.category,returnUrl:"/problems/ru/"+p.slug+"/",suggestions:p.suggestedAuditFlags||[]};
const before=/const sourceMap=\{[^\n]+\};\nconst slug=/;
if(!before.test(html))throw new Error("Audit sourceMap anchor missing. Refusing a blind edit.");
await writeFile(dest,html.replace(before,"const sourceMap="+JSON.stringify(map)+";\nconst slug="),"utf8");
console.log("Synced",Object.keys(map).length,"problem contexts into Audit.");
