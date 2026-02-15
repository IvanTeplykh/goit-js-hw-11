import{a as f,i as a,S as u}from"./assets/vendor-qbZl2uZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const m="54652097-fa33845d90f17562231f3e558";function y(r){return f({method:"get",url:"https://pixabay.com/api/",params:{key:m,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(function(t){return console.log(t.data.hits),t.data}).catch(function(t){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const h=u.default||u;let c;function p(r){const t=document.querySelector(".gallery"),s=r.map(i=>`<li class="photo-card">
            <a href="${i.largeImageURL}">
                <img src="${i.webformatURL}" alt="${i.tags}"/>
            </a>
            <div class="info">
            <div class="info-item">
                <p class="info-item">
                    <b>Likes</b>${i.likes}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Views</b>${i.views}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Comments</b>${i.comments}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Downloads</b>${i.downloads}
                </p>
                </div>
            </div>
        </li>`).join("");t.innerHTML=s,c?c.refresh():c=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,closeText:"×",navText:["←","→"]})}function g(){const r=document.querySelector(".gallery");r.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function v(){document.querySelector(".loader").classList.add("hidden")}const d=document.querySelector(".form"),L=document.querySelector(".js-search-query");let n="";d.addEventListener("submit",S);function S(r){if(r.preventDefault(),g(),b(),n=r.currentTarget.searchText.value.trim(),L.textContent=`Search query : "${n}"`,d.reset(),n===""){a.info({title:"Info",position:"topRight",message:"Please enter a search query!"});return}y(n).then(t=>{t.hits.length===0&&a.info({title:"Info",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),p(t.hits)}).catch(t=>{a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
