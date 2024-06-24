import{i,S as h}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=s=>{const t="https://pixabay.com",o="/api/",a=new URLSearchParams({key:"44460867-9f013743ec0c5b2ec6c0f5088",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${t}${o}?${a}`;return fetch(e).then(r=>r.json())};function y(s){return s.hits.length===0&&i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"}),s.hits.map(o=>{const{webformatURL:a,largeImageURL:e,tags:r,likes:n,views:p,comments:d,downloads:g}=o;return`<li class="gallery-item">
           <a class="gallery-link" href="${e}">
    <img
      width=360;
      height=200;
      class="gallery-image"
      src="${a}"
      alt="${r} " />
          <div class="image-info">
               <p>LIKES <span>${n}</span></p>
                    <p>VIEWS <span>${p}</span></p>
                    <p>COMMENTS <span>${d}</span></p>
                    <p>DOWNLOADS <span>${g}</span></p>
                </div>
                </a>
            </li>
        `}).join("")}const l=document.querySelector("form"),c=document.querySelector(".gallery"),m=document.querySelector(".loader");l.addEventListener("submit",s=>{s.preventDefault(),c.innerHTML="",L();const t=s.target.elements.search.value.trim();if(t===""){i.warning({title:"Warning",message:"Search query is empty. Please, enter a word",position:"topCenter",backgroundColor:"orange",theme:"dark",messageColor:"white"}),u();return}f(t).then(o=>{const a=y(o);c.insertAdjacentHTML("beforeend",a),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>{console.log(o),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter",backgroundColor:"red",theme:"dark",messageColor:"white"})}).finally(()=>u()),l.reset()});function L(){m.classList.remove("visually-hidden")}function u(){m.classList.add("visually-hidden")}
//# sourceMappingURL=commonHelpers.js.map
