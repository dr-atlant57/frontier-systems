/* ROOT FRONTIER SYSTEMS / GLOBAL SITE MAP
   Stable global navigation above section-specific menus.
   Single shared source: do not edit individual section navs to mimic a global menu.
*/
(()=>{"use strict";
const path=decodeURI(location.pathname);let isRu=/^\/visionaries\/ru\/|^\/problems\/ru\//.test(path)||document.documentElement.lang==="ru";
const sections=[
{key:"home",en:"Home",ru:"Главная",url:"/"},
{key:"ideas",en:"Ideas on Demand",ru:"Идеи на заказ",url:"/ideas/"},
{key:"solutions",en:"Solutions",ru:"Решения",url:"/solutions/"},
{key:"visionaries",en:"For Visionaries",ru:"Визионерам",url:isRu?"/visionaries/ru/":"/visionaries/"},
{key:"cases",en:"Cases",ru:"Кейсы",url:"/cases/"},
{key:"research",en:"Research",ru:"Исследования",url:"/research/"},
{key:"contact",en:"Contact",ru:"Контакт",url:"/contact/"}];
const catalog=[
["COMMERCIAL ARCHITECTURE","КОММЕРЧЕСКАЯ АРХИТЕКТУРА",[
["Ideas on Demand","Идеи на заказ","/ideas/"],["Problem Diagnostic","Диагностика запроса",isRu?"/diagnostic/ru/":"/diagnostic/"],["Solutions","Решения","/solutions/"],["System Programs","Системные программы","/system-programs/"],["Frontier Programs","Фронтирные программы","/frontier-programs/"],["Enterprise AI","Корпоративный AI","/enterprise-ai/"],["Architecture Value","Ценность архитектуры","/why-architecture/"],["AI Architecture Audit","AI-аудит","/audit/"],["Discover","Диагностика","/discover/"]]],
["DISCOVER & RESEARCH","ПОИСК И ИССЛЕДОВАНИЯ",[
["Problem Atlas","Атлас проблем",isRu?"/problems/ru/":"/problems/en/"],["Research","Исследования","/research/"],["Evidence & Method","Результаты и метод",isRu?"/evidence/ru/":"/evidence/"],["Cases","Кейсы","/cases/"],["Project Lab","Лаборатория проектов","/project-lab/"],["Registry","Реестр","/registry/"],["NEMT AI Dispatch Demo","Демо NEMT AI Dispatch","/nemt-ai-dispatch/"]]],
["FOR VISIONARIES","ВИЗИОНЕРАМ",[
["For Visionaries","Для визионеров",isRu?"/visionaries/ru/":"/visionaries/"],["Our Perspective","Наша оптика",isRu?"/visionaries/ru/perspective/":"/visionaries/perspective/"],["Possibility Atlas","Атлас возможностей",isRu?"/visionaries/ru/possibilities/":"/visionaries/possibilities/"],["Frontier Research","Фронтирные исследования",isRu?"/visionaries/ru/research/":"/visionaries/research/"],["Human Potential","Потенциал человека",isRu?"/visionaries/ru/human-potential/":"/visionaries/human-potential/"],["Emerging Societies","Новые общества",isRu?"/visionaries/ru/emerging-societies/":"/visionaries/emerging-societies/"],["Civilization Architecture","Цивилизационная архитектура",isRu?"/visionaries/ru/civilization-architecture/":"/visionaries/civilization-architecture/"],["Build With Us","Сотрудничество",isRu?"/visionaries/ru/partners/":"/visionaries/partners/"]]],
["SYSTEM ARCHITECTURES","СИСТЕМНЫЕ АРХИТЕКТУРЫ",[
["Business","Бизнес","/systems/business/"],["AI Architecture","Архитектура AI","/systems/ai/"],["Automation","Автоматизация","/systems/automation/"],["Organization","Организация","/systems/organizational/"],["Transformation","Трансформация","/systems/transformation/"],["Human Systems","Человеческие системы","/human-systems/"],["CRANIO","CRANIO","/human-systems/cranium/"],["CRANIO CORE","CRANIO CORE","/human-systems/cranium/core.html"],["Head & Neck Optimization","Оптимизация головы и шеи","/human-systems/cranium/optimization.html"],["For Men","Для мужчин","/human-systems/cranium/men.html"],["For Women","Для женщин","/human-systems/cranium/women.html"]]]
];
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
const label=(x)=>isRu?x.ru:x.en;
function locationInfo(){
const p=path;
const base=[
[/^\/visionaries\//,"visionaries",isRu?"Архитектура возможностей":"Architecture of Possibility"],
[/^\/problems\//,"research",isRu?"Атлас проблем":"Problem Atlas"],
[/^\/ideas\//,"ideas",isRu?"Идеи на заказ":"Ideas on Demand"],
[/^\/diagnostic\//,"ideas",isRu?"Диагностика запроса":"Problem Diagnostic"],
[/^\/evidence\//,"research",isRu?"Результаты и метод":"Evidence & Method"],
[/^\/solutions\//,"solutions",isRu?"Карта решений":"Solutions"],
[/^\/system-programs\//,"solutions","System Programs"],
[/^\/frontier-programs\//,"solutions","Frontier Programs"],
[/^\/enterprise-ai\//,"solutions","Enterprise AI"],
[/^\/audit\//,"solutions","AI Architecture Audit"],
[/^\/systems\//,"solutions",isRu?"Системы":"Systems"],
[/^\/human-systems\//,"solutions","Human Systems"],
[/^\/cranium\.html$/,"solutions","CRANIO"],
[/^\/cases\/|^\/00[1-3]\//,"cases",isRu?"Кейсы":"Cases"],
[/^\/nemt-ai-dispatch\//,"cases","NEMT AI Dispatch"],
[/^\/research\//,"research",isRu?"Исследования":"Research"],
[/^\/project-lab\//,"research","Project Lab"],
[/^\/registry\//,"research","Registry"],
[/^\/discover\//,"research","Discover"],
[/^\/why-architecture\//,"research",isRu?"Ценность архитектуры":"Architecture Value"],
[/^\/briefings\/|^\/east-west\//,"cases",isRu?"Индивидуальный проект":"Special Project"],
[/^\/contact\//,"contact",isRu?"Контакты":"Contact"]
];
if(p==="/"||p==="/index.html")return {key:"home",name:isRu?"Главная":"Home"};
for(const [re,key,name]of base)if(re.test(p))return {key,name};
return {key:"home",name:isRu?"Проект RFS":"RFS Project"};
}
let info=locationInfo();
function init(){
 if(document.getElementById("rfs-global-header")||!document.body)return;
 const header=document.createElement("div");header.id="rfs-global-header";header.setAttribute("role","banner");header.setAttribute("data-rfs-shell","navigation");
 const nav=sections.map(x=>'<a data-rfs-primary="'+esc(x.key)+'" href="'+esc(x.url)+'" '+(info.key===x.key?'aria-current="location"':'')+'>'+esc(label(x))+'</a>').join("");
 const groups=catalog.map(([en,ru,arr])=>'<div class="rfs-sitemap-col"><h3>'+esc(isRu?ru:en)+'</h3>'+arr.map(([ne,nr,u])=>'<a href="'+esc(u)+'">'+esc(isRu?nr:ne)+'</a>').join("")+'</div>').join("");
 header.innerHTML='<div class="rfs-global-bar"><a class="rfs-global-brand" href="/" aria-label="ROOT FRONTIER SYSTEMS / home"><b>ROOT FRONTIER SYSTEMS</b><small>ARCHITECTURE BUREAU</small></a><div class="rfs-global-location" aria-label="'+(isRu?"Текущий раздел":"Current section")+'"><span>'+esc(isRu?"СЕЙЧАС":"YOU ARE HERE")+'</span><strong>'+esc(info.name)+'</strong></div><nav class="rfs-global-links" aria-label="'+(isRu?"Главная навигация сайта":"Global site navigation")+'">'+nav+'</nav><button type="button" id="rfs-global-toggle" aria-controls="rfs-global-mega" aria-expanded="false"><span class="rfs-nav-burger" aria-hidden="true">☷</span><span>'+esc(isRu?"Все разделы":"All sections")+'</span></button></div><div id="rfs-global-mega" hidden aria-label="'+esc(isRu?"Карта сайта":"Site map")+'"><div class="rfs-mega-head"><strong>'+esc(isRu?"Карта ROOT FRONTIER SYSTEMS":"ROOT FRONTIER SYSTEMS / Site Map")+'</strong><button type="button" id="rfs-global-close" aria-label="'+esc(isRu?"Закрыть меню":"Close menu")+'">×</button></div><div class="rfs-mega-grid">'+groups+'</div><div class="rfs-mega-bottom"><span>'+esc(isRu?"Единая система. Разные маршруты.":"One architecture. Different paths.")+'</span><a href="/contact/">'+esc(isRu?"Начать разговор →":"Start a conversation →")+'</a></div></div>';
 document.body.insertBefore(header,document.body.firstChild);
 const footer=document.createElement("div");footer.id="rfs-global-footer";footer.setAttribute("role","contentinfo");footer.innerHTML='<div class="rfs-footer-main"><div class="rfs-footer-brand"><b>ROOT FRONTIER SYSTEMS</b><p>'+esc(isRu?"Архитектурное бюро систем следующего поколения.":"Architecture Bureau for Next-Generation Systems.")+'</p><a href="/">'+esc(isRu?"Вернуться на главную →":"Return to homepage →")+'</a></div>'+groups+'</div><div class="rfs-footer-bottom"><span>ROOT FRONTIER SYSTEMS / 2026</span><span>'+esc(isRu?"От задачи — к архитектуре возможностей.":"From the real problem to new possibilities.")+'</span><a href="mailto:rootfrontier.office@gmail.com">rootfrontier.office@gmail.com</a></div>';
 document.body.appendChild(footer);
 document.body.classList.add("rfs-global-shell");
 const toggle=header.querySelector("#rfs-global-toggle"),mega=header.querySelector("#rfs-global-mega"),close=header.querySelector("#rfs-global-close");
 const setOpen=open=>{mega.hidden=!open;toggle.setAttribute("aria-expanded",String(open));document.body.classList.toggle("rfs-mega-open",open);if(open)close.focus();else toggle.focus()};
 toggle.addEventListener("click",()=>setOpen(mega.hidden));close.addEventListener("click",()=>setOpen(false));
 
 mega.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{mega.hidden=true;toggle.setAttribute("aria-expanded","false")}));
 // Native headers contain local section menus and locale controls; keep them intact.
 // The common header is a separate, persistent global orientation layer.
}
function changeLanguage(next){
 const ru=next==="ru";if(ru===isRu)return;
 isRu=ru;
 for(const section of sections)if(section.key==="visionaries")section.url=isRu?"/visionaries/ru/":"/visionaries/";
 for(const [, , list] of catalog)for(const link of list){
  let url=link[2];if(/^\/visionaries\//.test(url)){url=url.replace(/^\/visionaries\/(ru\/)?/,"/visionaries/");link[2]=isRu?url.replace("/visionaries/","/visionaries/ru/"):url}
  else if(/^\/diagnostic\//.test(url))link[2]=isRu?"/diagnostic/ru/":"/diagnostic/";
  else if(/^\/evidence\//.test(url))link[2]=isRu?"/evidence/ru/":"/evidence/";
  else if(/^\/problems\/(en|ru)\//.test(url))link[2]=isRu?"/problems/ru/":"/problems/en/";
 }
 info=locationInfo();
 document.getElementById("rfs-global-header")?.remove();
 document.getElementById("rfs-global-footer")?.remove();
 document.body?.classList.remove("rfs-mega-open");
 init();
}
document.addEventListener("frontier:language",e=>{if(e.detail?.lang)changeLanguage(e.detail.lang)});
document.addEventListener("click",e=>{
 const target=e.target?.closest?.("button");
 if(!target)return;
 if(target.matches(".langs #ru,.lang #ru"))changeLanguage("ru");
 else if(target.matches(".langs #en,.lang #en"))changeLanguage("en");
 else if(target.id==="language"&&/^\\/(001|002|003)\\//.test(path))changeLanguage(isRu?"en":"ru");
});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){const h=document.getElementById("rfs-global-header");const mega=h?.querySelector("#rfs-global-mega");if(mega&&!mega.hidden)h.querySelector("#rfs-global-close")?.click()}});
document.addEventListener("click",e=>{const h=document.getElementById("rfs-global-header");const mega=h?.querySelector("#rfs-global-mega");if(h&&mega&&!mega.hidden&&!h.contains(e.target))h.querySelector("#rfs-global-close")?.click()});
const obs=new MutationObserver(()=>changeLanguage(document.documentElement.lang));
obs.observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
