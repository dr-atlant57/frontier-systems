// ROOT FRONTIER Semantic Problem Factory — deterministic static HTML generator.
// Source: seo-factory/seed.json. Node runner: seo-factory/run.mjs.
const HOST="https://rootfrontier.systems";
const text={
en:{atlas:"Architecture Problem Atlas",intro:"Discover the systemic reasons business capabilities fail to produce results. Each dossier compares architectural approaches and defines a testable next step.",sym:"Symptoms",cause:"Potential root causes",options:"Alternative architectures",questions:"Questions for the audit",metrics:"Evidence to measure",delivery:"Proposed first deliverable",buyer:"Who needs this",modules:"Relevant architecture modules",related:"Related problems",method:"Method and limitations",methodBody:"Independent architectural hypothesis, not a customer case study. Causes and financial results must be validated against authorized data, owner interviews and controlled tests. An MVP is not proof of return on investment.",audit:"Start architecture audit",discuss:"Discuss this problem",portfolio:"Explore our portfolio",notes:"The current audit questionnaire is in Russian.",lang:"Русская версия",back:"All problems",status:"RESEARCH DOSSIER · REQUIRES VALIDATION"},
ru:{atlas:"Атлас архитектурных проблем",intro:"Исследуем причины, по которым возможности бизнеса не превращаются в результат. В каждом досье — альтернативные архитектуры и проверяемый следующий шаг.",sym:"Проявления",cause:"Возможные первопричины",options:"Альтернативные архитектуры",questions:"Вопросы для аудита",metrics:"Что измерять",delivery:"Первый ожидаемый результат",buyer:"Для кого",modules:"Связанные модули",related:"Смежные проблемы",method:"Метод и ограничения",methodBody:"Независимая архитектурная гипотеза, а не завершённый клиентский кейс. Причины и финансовые результаты необходимо проверять по разрешённым данным, интервью и контролируемым экспериментам. MVP не является доказательством окупаемости.",audit:"Пройти архитектурный аудит",discuss:"Обсудить задачу",portfolio:"Исследовать наш портфель",notes:"Аудит связан с подготовкой индивидуального архитектурного ТЗ.",lang:"English version",back:"Все проблемы",status:"ИССЛЕДОВАНИЕ · ТРЕБУЕТСЯ ПРОВЕРКА"}};
const esc=(v)=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");
const absolute=(p)=>HOST+p;
function alternates(slug){return ["en","ru"].map(l=>'<link rel="alternate" hreflang="'+l+'" href="'+absolute("/problems/"+l+"/"+(slug?slug+"/":""))+'">').join("");}
function frame(lang,title,description,path,slug,content){
 const schema=JSON.stringify({"@context":"https://schema.org","@type":"WebPage",name:title,description,url:absolute(path),inLanguage:lang,isPartOf:{"@type":"WebSite",name:"ROOT FRONTIER SYSTEMS",url:HOST+"/"}}).replace(/</g,"\\u003c");
 return '<!doctype html>\n<html lang="'+lang+'"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' | ROOT FRONTIER SYSTEMS</title><meta name="description" content="'+esc(description)+'"><link rel="canonical" href="'+absolute(path)+'">'+alternates(slug)+'<meta name="robots" content="index,follow"><meta property="og:title" content="'+esc(title)+'"><meta property="og:description" content="'+esc(description)+'"><meta property="og:url" content="'+absolute(path)+'"><link rel="stylesheet" href="/problems/assets/style.css"><script type="application/ld+json">'+schema+'</script></head><body><a class="skip" href="#main">Skip</a><header><div class="wrap top"><a class="brand" href="/">ROOT FRONTIER SYSTEMS</a><nav aria-label="Primary"><a href="/problems/'+lang+'/">'+esc(text[lang].atlas)+'</a><a href="/project-lab/">'+esc(text[lang].portfolio)+'</a><a href="/contact/">'+esc(text[lang].discuss)+'</a></nav></div></header><main class="wrap" id="main">'+content+'</main><footer><div class="wrap footer"><b>ROOT FRONTIER SYSTEMS</b><span>Working at the roots of complexity.</span><a href="/contact/">Contact ↗</a></div></footer></body></html>';
}
function bullets(items){return '<ul>'+items.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ul>';}
function topicPage(data,index,lang){
 const p=data.issues[index],d=p[lang],t=text[lang],other=lang==="en"?"ru":"en",path="/problems/"+lang+"/"+p.slug+"/";
 const optionCards=d.options.map((op,i)=>'<article class="option"><span class="eyebrow">0'+(i+1)+'</span><h3>'+esc(op[0])+'</h3><p>'+esc(op[1])+'</p></article>').join("");
 const related=(p.related||[]).map(r=>data.issues.find(x=>x.slug===r.to)).filter(Boolean).slice(0,4).map(x=>'<a class="related" href="/problems/'+lang+'/'+x.slug+'/"><small>'+esc(x.category)+'</small><strong>'+esc(x[lang].title)+' ↗</strong></a>').join("");
 const body='<div class="eyebrow">ROOT FRONTIER / '+esc(p.category)+'</div><p class="breadcrumb"><a href="/problems/'+lang+'/">'+esc(t.back)+'</a> / '+esc(p.category)+'</p>'+
 '<section class="hero"><p class="eyebrow">'+esc(t.status)+'</p><h1>'+esc(d.title)+'</h1><p class="lead">'+esc(d.tagline)+'</p><p class="overview">'+esc(d.problem)+'</p><div class="buttons"><a class="primary" href="/audit/?problem='+encodeURIComponent(p.slug)+'">'+esc(t.audit)+' ↗</a><a class="ghost" href="/contact/">'+esc(t.discuss)+' ↗</a></div><small>'+esc(t.notes)+'</small><p class="language"><a href="/problems/'+other+'/'+p.slug+'/">'+esc(t.lang)+' ↗</a></p></section>'+
 '<section class="columns"><article class="panel"><h2>'+esc(t.sym)+'</h2>'+bullets(d.symptoms)+'</article><article class="panel"><h2>'+esc(t.cause)+'</h2>'+bullets(d.causes)+'</article></section>'+
 '<section class="section"><div class="eyebrow">01 / ARCHITECTURE</div><h2>'+esc(t.options)+'</h2><div class="options">'+optionCards+'</div></section>'+
 '<section class="columns section"><article class="panel"><h2>'+esc(t.questions)+'</h2>'+bullets(d.questions)+'</article><article class="panel"><h2>'+esc(t.metrics)+'</h2>'+bullets(d.metrics)+'</article></section>'+
 '<section class="engagement"><div class="eyebrow">02 / DISCOVERY</div><h2>'+esc(t.delivery)+'</h2><p>'+esc(d.deliverable)+'</p><dl><dt>'+esc(t.buyer)+'</dt><dd>'+esc(d.buyer)+'</dd><dt>'+esc(t.modules)+'</dt><dd>'+esc(p.modules.join(" · "))+'</dd></dl><div class="buttons"><a class="primary" href="/audit/?problem='+encodeURIComponent(p.slug)+'">'+esc(t.audit)+' ↗</a><a class="ghost" href="/project-lab/">'+esc(t.portfolio)+' ↗</a></div></section>'+
 '<section class="section methodology"><h2>'+esc(t.method)+'</h2><p>'+esc(t.methodBody)+'</p></section>'+
 '<section class="section"><h2>'+esc(t.related)+'</h2><div class="related-grid">'+related+'</div></section>';
 return frame(lang,d.title,d.description,path,p.slug,body);
}
function indexPage(data,lang){
 const t=text[lang],other=lang==="en"?"ru":"en",path="/problems/"+lang+"/";
 const items=data.issues.map(p=>'<article class="item"><div class="eyebrow">'+esc(p.category)+'</div><h2><a href="/problems/'+lang+'/'+p.slug+'/">'+esc(p[lang].title)+' ↗</a></h2><p>'+esc(p[lang].description)+'</p><small>'+esc(p.modules.join(" · "))+'</small></article>').join("");
 const body='<div class="eyebrow">ROOT FRONTIER / PROBLEM INTELLIGENCE</div><section class="hero"><h1>'+esc(t.atlas)+'</h1><p class="lead">'+esc(t.intro)+'</p><div class="buttons"><a class="primary" href="/audit/">'+esc(t.audit)+' ↗</a><a class="ghost" href="/project-lab/">'+esc(t.portfolio)+' ↗</a></div><p class="language"><a href="/problems/'+other+'/">'+esc(t.lang)+' ↗</a></p></section><section class="items">'+items+'</section><p class="fine">'+esc(t.methodBody)+'</p>';
 return frame(lang,t.atlas,t.intro,path,null,body);
}
function gateway(){
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Architecture Problem Atlas | ROOT FRONTIER SYSTEMS</title><meta name="description" content="An English and Russian atlas of unresolved enterprise architecture problems."><link rel="canonical" href="'+absolute("/problems/")+'">'+alternates(null)+'<link rel="stylesheet" href="/problems/assets/style.css"></head><body><main class="wrap gateway"><div class="eyebrow">ROOT FRONTIER / PROBLEM INTELLIGENCE</div><h1>Find the problem behind the problem.</h1><p>Explore systemic contradictions and architecture hypotheses. Select your language:</p><div class="buttons"><a class="primary" href="/problems/en/">English ↗</a><a class="ghost" href="/problems/ru/">Русский ↗</a></div><a href="/">← ROOT FRONTIER SYSTEMS</a></main></body></html>';
}
function sitemap(data){
 let rows=[["/",null],["/audit/",null],["/audit/architecture/",null],["/project-lab/",null],["/problems/",null]];
 for(const l of ["en","ru"])rows.push(["/problems/"+l+"/",null]);
 for(const p of data.issues)for(const l of ["en","ru"])rows.push(["/problems/"+l+"/"+p.slug+"/",p.slug]);
 return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+rows.map(([path,slug])=>'<url><loc>'+absolute(path)+'</loc><lastmod>'+esc(data.editorial_date||"2026-10-18")+'</lastmod>'+(!slug?'':["en","ru"].map(l=>'<xhtml:link rel="alternate" hreflang="'+l+'" href="'+absolute("/problems/"+l+"/"+slug+"/")+'"/>').join(""))+'</url>').join("\n")+'\n</urlset>\n';
}

function knowledgeGraph(data){
 const nodes=[],edges=[],seen=new Set();
 const node=(id,type,properties)=>{if(seen.has(id))return;seen.add(id);nodes.push({id,type,...properties});};
 const edge=(from,to,type,meta={})=>edges.push({from,to,type,...meta});
 for(const p of data.issues){
  const id="problem:"+p.slug;
  node(id,"problem",{status:"editorial-hypothesis",category:p.category,url:"/problems/en/"+p.slug+"/",label:{en:p.en.title,ru:p.ru.title}});
  for(let i=0;i<p.en.causes.length;i++){const n="cause:"+p.slug+":"+i;node(n,"hypothesized-cause",{label:{en:p.en.causes[i],ru:p.ru.causes[i]}});edge(id,n,"MAY_HAVE_CAUSE");}
  for(let i=0;i<p.en.symptoms.length;i++){const n="symptom:"+p.slug+":"+i;node(n,"symptom",{label:{en:p.en.symptoms[i],ru:p.ru.symptoms[i]}});edge(id,n,"MAY_SHOW_SYMPTOM");}
  for(let i=0;i<p.en.options.length;i++){const n="solution-option:"+p.slug+":"+i;node(n,"architecture-alternative",{label:{en:p.en.options[i][0],ru:p.ru.options[i][0]},explanation:{en:p.en.options[i][1],ru:p.ru.options[i][1]}});edge(id,n,"MAY_BE_ADDRESSED_BY");}
  for(let i=0;i<p.en.metrics.length;i++){const n="metric:"+p.slug+":"+i;node(n,"validation-metric",{label:{en:p.en.metrics[i],ru:p.ru.metrics[i]}});edge(id,n,"SHOULD_BE_TESTED_USING");}
  for(const m of p.modules){const n="module:"+m.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");node(n,"capability",{name:m});edge(id,n,"MAY_USE_CAPABILITY");}
  const out="outcome:"+p.slug;node(out,"proposed-discovery-deliverable",{label:{en:p.en.deliverable,ru:p.ru.deliverable}});edge(id,out,"PROPOSES_DISCOVERY_OUTPUT");
  for(const lang of ["en","ru"])for(let i=0;i<p[lang].queries.length;i++){const n="intent:"+p.slug+":"+lang+":"+i;node(n,"unvalidated-search-intent",{lang,text:p[lang].queries[i],validation:"not-volume-verified"});edge(n,id,"DESCRIBES_POSSIBLE_NEED");}
  for(const r of p.related||[])edge(id,"problem:"+r.to,"SEMANTIC_RELATION",{relation:r.type,rationale:r.rationale});
 }
 return {schema:"rfs.architecture-problem-graph.v1",editorialDate:data.editorial_date,validation:"hypothesis-graph; not verified enterprise facts or search volumes",nodeCount:nodes.length,edgeCount:edges.length,nodes,edges};
}

export function build(data){
 if(!data.issues?.length)throw Error("Missing issues");
 const files={},used=new Set();
 for(let i=0;i<data.issues.length;i++){
  const p=data.issues[i];
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)||used.has(p.slug))throw Error("Bad slug: "+p.slug);
  used.add(p.slug);
  for(const l of ["en","ru"]){
    const d=p[l];for(const k of ["title","description","problem","symptoms","causes","options","questions","metrics","queries"])if(!d?.[k]?.length)throw Error("Missing: "+p.slug+" "+l+" "+k);
    files["problems/"+l+"/"+p.slug+"/index.html"]=topicPage(data,i,l);
  }
 }
 files["problems/en/index.html"]=indexPage(data,"en");
 files["problems/ru/index.html"]=indexPage(data,"ru");
 files["problems/index.html"]=gateway();
 files["sitemap.xml"]=sitemap(data);
 files["robots.txt"]="User-agent: *\nAllow: /\nSitemap: "+HOST+"/sitemap.xml\n";
 const lines=["slug,language,query,validation"];
 for(const p of data.issues)for(const l of ["en","ru"])for(const q of p[l].queries)lines.push([p.slug,l,'"'+q.replace(/"/g,'""')+'"',"intent-hypothesis"].join(","));
 files["seo-factory/query-backlog.csv"]=lines.join("\n")+"\n";
 files["problems/graph.json"]=JSON.stringify(knowledgeGraph(data),null,2)+"\n";
 return files;
}
