!function(){var e="live_pxSDJSumBlgGWdw6YrIpC15OFtOdMi98EkaANJ9KWRL7uPHHV3EZeBIoAL5iM9hd",n="https://api.thecatapi.com/v1";function t(t){return fetch("".concat(n,"/images/search?breed_ids=").concat(t),{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var c=document.querySelector(".cat-info"),o=document.querySelector(".breed-select"),r=document.querySelector(".loader"),a=document.querySelector(".error");function i(e){c.innerHTML='\n        <img src="'.concat(e[0].url,'" alt="').concat(e[0].breeds[0].name,'"></img>\n        <h2>').concat(e[0].breeds[0].name,"</h2>\n        <p>").concat(e[0].breeds[0].description,"</p>\n        <p><b>Temperament: ").concat(e[0].breeds[0].temperament,"</b></p>\n    ")}function u(){r.style.display="none"}function l(){a.style.display="block"}a.style.display="none",o.addEventListener("change",(function(e){r.style.display="block",c.innerHTML="",t(e.target.value).then(i).catch((function(e){console.log(e),l()})).finally((function(){u()}))})),fetch("".concat(n,"/breeds"),{headers:{"x-api-key":e}}).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){e.forEach((function(e){var n=document.createElement("option");n.value=e.id,n.textContent=e.name,o.appendChild(n),u()})),t(e[0].id).then(i).catch((function(e){console.log(e),l()}))})).catch((function(e){console.log(e),l()}))}();
//# sourceMappingURL=index.7cc18dd8.js.map