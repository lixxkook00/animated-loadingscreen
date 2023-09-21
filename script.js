const loadingEl = document.querySelector('#loading');
const loadingTextEl = document.querySelector('#loading-text');
const loadingLogoEl = document.querySelector('#loading-logo');
const loadingTextContent = loadingTextEl.textContent
loadingTextEl.innerText = ""

for (let i = 0; i < loadingTextContent.length; i++) {
    const span = document.createElement("span");
    
    span.textContent = loadingTextContent[i];
    span.style.animationDelay = `${i * 0.15}s`;
    
    console.log(loadingTextContent[i])

    loadingTextEl.appendChild(span);
}

window.addEventListener('load', function() {
    loadingLogoEl.classList.add('show');

    loadingLogoEl.addEventListener('animationend', () => {
        loadingTextEl.classList.add('show');
    });

    loadingEl.onclick = () => {
        loadingEl.style.display = 'none'
    }
});