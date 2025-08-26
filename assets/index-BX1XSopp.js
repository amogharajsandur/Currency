(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(){return`
    <header>
        <h1>Currency.VJSP</h1>
        <span class="material-symbols-outlined">keyboard_arrow_down</span>
        <nav>
            <ul>
                <a href="#"><li>About</li></a>
            </ul>
        </nav>
    </header>
    `}function s(){return`
    <footer>
        <p>[Designed & Developed with ❤️ by <a href="https://www.linkedin.com/in/amogharajsandur/" target="_blank" rel="noopener noreferrer">Amogha Raj Sandur</a>]</p>
    </footer>
    `}function a({type:r="button",id:n,text:o="button"}={}){return`
        <button type="${r}" id="${n}">${o}</button>
        `}function f(){return`
        ${d()}
        <main>
            <form>
                <label for="input-value">Enter Value (in $)</label>
                <input type="number" name="input-value" id="input-value" placeholder=0>
                <div class="actions">
                ${a({type:"reset",id:"clear",text:"Clear"})}
                ${a({id:"convert",text:"Convert"})}
                </div>
            </form>
            <div id="converted"></div>
        </main>
        ${s()}
        `}document.querySelector("#app").innerHTML=f();let p=document.getElementById("convert"),m=document.getElementById("clear"),c=document.getElementById("converted"),u=document.getElementById("input-value");p.addEventListener("click",v);m.addEventListener("click",y);function v(){let r=u.value*87.54;h(r)}function y(){c.innerHTML=""}function h(r){c.innerHTML=`
        <p>The equivalent value of <i>$${u.value?u.value:0}</i> is: ₹<span id="converted_value"><b>${r}</b></span></p>
    `}
