import{i as c,S as f}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=s=>{const r="https://pixabay.com",o="/api/",n=new URLSearchParams({key:"44460867-9f013743ec0c5b2ec6c0f5088",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${r}${o}?${n}`;return fetch(e).then(t=>t.json())};function h(s){return s.hits.length===0&&c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"}),s.hits.map(o=>{const{webformatURL:n,largeImageURL:e,tags:t,likes:a,views:m,comments:p,downloads:d}=o;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${n}"
      alt="${t} " />
          <div class="image-info">
               <p>LIKES <span>${a}</span></p>
                    <p>VIEWS <span>${m}</span></p>
                    <p>COMMENTS <span>${p}</span></p>
                    <p>DOWNLOADS <span>${d}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const i=document.querySelector("form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader");i.addEventListener("submit",s=>{s.preventDefault(),l.innerHTML="",y();const r=s.target.elements.search.value.trim();if(r===""){c.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topCenter",backgroundColor:"orange",theme:"dark",messageColor:"white"});return}g(r).then(o=>{const n=h(o);l.insertAdjacentHTML("beforeend",n),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o)}).finally(()=>L()),i.reset()});function y(){u.classList.remove("visually-hidden")}function L(){u.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
