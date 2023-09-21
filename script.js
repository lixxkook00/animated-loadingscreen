const LOADING_TEXT_DELAY = 0.025;
const LOADING_TITLE_DELAY = 0.5;

const loadingEl = document.querySelector('#loading');
const loadingTextEl = document.querySelector('#loading-text');
const loadingLogoEl = document.querySelector('#loading-logo');
const loadingTitleEl = document.querySelector('#loading-title');
const loadingTextContent = loadingTextEl.textContent
loadingTextEl.innerText = ""

let totalTitleDelay = (loadingTextContent.length - 1)* LOADING_TEXT_DELAY*10 + LOADING_TITLE_DELAY;

function appendLetterWithDelay(index) {
    const span = document.createElement("span");
    span.textContent = loadingTextContent[index];
    if(loadingTextContent[index] === " "){
        span.style.paddingLeft = '10px'
    }
    loadingTextEl.appendChild(span);

    if (index < loadingTextContent.length - 1) {
        span.addEventListener("animationend", function() {
            appendLetterWithDelay(index + 1);
        });
    }else {
        span.addEventListener("animationend", function() {
            loadingTextEl.classList.add('done');

            loadingTitleEl.style.animationDelay = `${LOADING_TITLE_DELAY}s`;
            loadingTitleEl.classList.add('show');
        });
    }
}
  

window.addEventListener('load', function() {
    loadingLogoEl.classList.add('show');
    
    loadingLogoEl.addEventListener('animationend', () => {
        
        loadingTextEl.classList.add('show');
        appendLetterWithDelay(0);
    });

    loadingEl.onclick = () => {
        loadingEl.style.display = 'none'
    }
});