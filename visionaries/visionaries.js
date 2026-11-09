(()=>{"use strict";
const nav=document.querySelector("[data-v-nav]"),menu=document.querySelector("[data-v-menu]");
if(nav&&menu){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});document.addEventListener("keydown",e=>{if(e.key==="Escape"){nav.classList.remove("open");menu.setAttribute("aria-expanded","false")}});}
const filters=[...document.querySelectorAll("[data-filter]")],items=[...document.querySelectorAll("[data-scale]")];
filters.forEach(b=>b.addEventListener("click",()=>{filters.forEach(x=>x.setAttribute("aria-pressed",String(x===b)));items.forEach(x=>x.hidden=b.dataset.filter!=="All"&&x.dataset.scale!==b.dataset.filter)}));
const form=document.querySelector("[data-inquiry]");if(!form)return;const status=document.querySelector("[data-status]");
const message=()=>{const d=new FormData(form);const fields=["name","organization","email","area","scale","role","vision","resources"];const src=new URLSearchParams(location.search).get("source")||"";return "ROOT FRONTIER SYSTEMS / FOR VISIONARIES\n\n"+fields.map(k=>k.toUpperCase()+": "+String(d.get(k)||"").trim()).join("\n\n")+"\n\nSource: "+src.slice(0,80)+"\nPage: "+location.pathname};
form.addEventListener("submit",e=>{e.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const subject="RFS Visionaries — "+String(d.get("area")||"Partnership").slice(0,70);status.textContent=form.dataset.ready;location.href="mailto:rootfrontier.office@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(message())});
document.querySelector("[data-copy]")?.addEventListener("click",async()=>{if(!form.reportValidity())return;try{await navigator.clipboard.writeText(message());status.textContent=form.dataset.copied}catch(e){status.textContent="Copy unavailable. Please use direct email."}});
})();
