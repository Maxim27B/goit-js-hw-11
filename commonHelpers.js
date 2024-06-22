import{i as l,S as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=n=>{const r="https://pixabay.com",o="/api/",s=new URLSearchParams({key:"44460867-9f013743ec0c5b2ec6c0f5088",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${s}`;return fetch(e).then(t=>t.json())};function d(n){return n.hits.length===0&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"}),n.hits.map(o=>{const{webformatURL:s,largeImageURL:e,tags:t,likes:a,views:p,comments:m,downloads:u}=o;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${s}"
      alt="${t} " />
          <div class="image-info">
               <p>LIKES <span>${a}</span></p>
                    <p>VIEWS <span>${p}</span></p>
                    <p>COMMENTS <span>${m}</span></p>
                    <p>DOWNLOADS <span>${u}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const i=document.querySelector("form"),c=document.querySelector(".gallery");i.addEventListener("submit",n=>{n.preventDefault(),c.innerHTML="";const r=n.target.elements.search.value.trim();if(r===""){l.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topCenter",backgroundColor:"orange",theme:"dark",messageColor:"white"});return}g(r).then(o=>{const s=d(o);console.log(s),c.insertAdjacentHTML("beforeend",s)}).catch(o=>{console.log(o)}),i.reset()});new f(".gallery li",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
