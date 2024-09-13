document.addEventListener("DOMContentLoaded", () => {
    const englishButton = document.getElementById("english-button");
    const turkishButton = document.getElementById("turkish-button");

    const elementsToTranslate = document.querySelectorAll('[data-en]');

    const switchToEnglish = () => {
        elementsToTranslate.forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute("placeholder", el.getAttribute("data-en"));
            } else {
                el.textContent = el.getAttribute("data-en");
            }
        });
        localStorage.setItem('language', 'en');       
    };

    const switchToTurkish = () => {
        elementsToTranslate.forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute("placeholder", el.getAttribute("data-tr"));
            } else {
                el.textContent = el.getAttribute("data-tr");
            }
        });
        localStorage.setItem('language', 'tr');
    };

    englishButton.addEventListener("click", switchToEnglish);
    turkishButton.addEventListener("click", switchToTurkish);

    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'en') {
        switchToEnglish();
    } else if (savedLanguage === 'tr') {
        switchToTurkish();
    } else {
        switchToEnglish();
    }
});
