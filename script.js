const LOADING_TEXT_DELAY = 0.1;
const LOADING_TITLE_DELAY = 0.1;

const loadingEl = document.querySelector('#loading');
const loadingTextEl = document.querySelector('#loading-text');
const loadingLogoEl = document.querySelector('#loading-logo');
const loadingTitleEl = document.querySelector('#loading-title');
const loadingTextContent = loadingTextEl.textContent
loadingTextEl.innerText = ""

let totalTitleDelay = (loadingTextContent.length - 1)* LOADING_TEXT_DELAY + LOADING_TITLE_DELAY;

for (let i = 0; i < loadingTextContent.length; i++) {
    const span = document.createElement("span");
    span.textContent = loadingTextContent[i];
    span.style.animationDelay = `${i * LOADING_TEXT_DELAY}s`;
    loadingTextEl.appendChild(span);
}

window.addEventListener('load', function() {
    loadingLogoEl.classList.add('show');
    
    loadingLogoEl.addEventListener('animationend', () => {
        loadingTextEl.classList.add('show');

        loadingTitleEl.style.animationDelay = `${totalTitleDelay}s`;
        loadingTitleEl.classList.add('show');
        
    });

    loadingEl.onclick = () => {
        loadingEl.style.display = 'none'
    }
});