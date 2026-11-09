#!/usr/bin/env node
// RFS static site quality gate. No third-party dependencies.
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Script } from "node:vm";

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const files=[];
function walk(dir){
 for(const e of readdirSync(dir,{withFileTypes:true})){
  if(e.isDirectory()){
   if([".git","node_modules",".github"].includes(e.name))continue;
   walk(path.join(dir,e.name));
  }else if(e.isFile())files.push(path.relative(root,path.join(dir,e.name)).split(path.sep).join("/"));
 }
}
walk(root);
const fileSet=new Set(files);
const html=files.filter(x=>x.endsWith(".html"));
const js=files.filter(x=>x.endsWith(".js"));
const errors=[],warnings=[];
function normalizeLink(value,page){
 let v=value.replaceAll("&amp;","&").trim();
 if(!v||v.startsWith("#")||v.startsWith("?")||/^(mailto:|tel:|data:|javascript:|sms:|blob:)/i.test(v)||v.includes("${")||v.includes("{{"))return null;
 if(/^https?:\/\//i.test(v)){
  let u;try{u=new URL(v)}catch{return null}
  if(!["rootfrontier.systems","www.rootfrontier.systems"].includes(u.hostname))return null;
  v=u.pathname;
 }else if(v.startsWith("//"))return null;
 v=v.split("#")[0].split("?")[0];
 if(!v)return null;
 const dest=v.startsWith("/")?v.slice(1):path.posix.join(path.posix.dirname(page),v);
 let f=path.posix.normalize(dest);
 if(!f||f===".")f="index.html";
 else if(v.endsWith("/")||!path.posix.extname(f))f=path.posix.join(f,"index.html");
 return f;
}
for(const p of html){
 const s=readFileSync(path.join(root,p),"utf8");
 if(!s.includes('/rfs-global-shell.js'))errors.push(p+": shared navigation missing");
 if(!/rel=["']canonical["']/i.test(s))errors.push(p+": canonical missing");
 if(!/<h1\b/i.test(s)&&!/<meta\s+http-equiv=["']refresh/i.test(s))warnings.push(p+": no H1");
 for(const a of s.matchAll(/\bhref=["']([^"']+)["']/gi)){
  const f=normalizeLink(a[1],p);
  if(f&&!fileSet.has(f))errors.push(p+": unresolved "+a[1]+" => "+f);
 }
 if(/^visionaries\/(ru\/)?/.test(p)||/^cases\/(ru\/)?[^/]+\/index\.html$/.test(p)||/^diagnostic\//.test(p)||/^evidence\//.test(p)){
  if(!/hreflang=["']en["']/.test(s)||!/hreflang=["']ru["']/.test(s))errors.push(p+": EN/RU alternates missing");
 }
}
for(const p of js){
 const s=readFileSync(path.join(root,p),"utf8");
 try{new Script(s,{filename:p})}catch(e){errors.push(p+": JavaScript syntax "+e.message)}
}
const sitemap=readFileSync(path.join(root,"sitemap.xml"),"utf8");
const loc=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
for(const u of loc){
 try{const x=new URL(u);if(x.hostname!=="rootfrontier.systems")continue;let f=decodeURIComponent(x.pathname).replace(/^\//,"");if(!f)f="index.html";else if(f.endsWith("/")||!path.posix.extname(f))f=path.posix.join(f,"index.html");if(!fileSet.has(f))errors.push("sitemap unresolved: "+u)}
 catch(e){errors.push("sitemap malformed URL: "+u)}
}
const report={html:html.length,js:js.length,sitemapUrls:loc.length,errors:errors.length,warnings:warnings.length};
console.log("RFS site audit",JSON.stringify(report));
warnings.forEach(s=>console.warn("WARN",s));
errors.forEach(s=>console.error("ERROR",s));
if(errors.length)process.exitCode=1;
