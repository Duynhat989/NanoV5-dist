(function () {
	'use strict';

	(function(){try{const e=location.hostname||"";if(e!=="labs.google"&&!e.endsWith(".labs.google"))return;chrome.storage.local.get(["pin_labs_domain","extension_enabled"],o=>{if(o.extension_enabled===!1||o.pin_labs_domain===!1)return;const t=document.createElement("script");t.src=chrome.runtime.getURL("stay-labs-flow.js"),t.type="text/javascript",t.onload=function(){this.remove();},(document.documentElement||document.head).appendChild(t);});}catch(e){console.error("stay-labs-flow inject error:",e);}})();(function(){let e=null;const o=()=>{e||(e=setInterval(()=>{location.reload();},1e3*60*2));},t=()=>{!e||(clearInterval(e),e=null);},r=()=>{chrome.storage.local.get(["extension_enabled"],n=>{n.extension_enabled===!1?t():o();});};try{r(),chrome.storage.onChanged.addListener((n,a)=>{a!=="local"||!n.extension_enabled||(n.extension_enabled.newValue===!1?t():o());});}catch(n){console.error("keepalive reload error:",n);}})();

})();
