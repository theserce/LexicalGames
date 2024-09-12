document.addEventListener("DOMContentLoaded", () => {
    const englishButton = document.getElementById("english-button");
    const turkishButton = document.getElementById("turkish-button");

    // Elements that have translations
    const elementsToTranslate = document.querySelectorAll('[data-en]');

    // Function to switch to English
    const switchToEnglish = () => {
        elementsToTranslate.forEach(el => {
            // Check if it's an input or textarea element for placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute("placeholder", el.getAttribute("data-en"));
            } else {
                // Otherwise, just change the text content
                el.textContent = el.getAttribute("data-en");
            }
        });
    };

    // Function to switch to Turkish
    const switchToTurkish = () => {
        elementsToTranslate.forEach(el => {
            // Check if it's an input or textarea element for placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.setAttribute("placeholder", el.getAttribute("data-tr"));
            } else {
                // Otherwise, just change the text content
                el.textContent = el.getAttribute("data-tr");
            }
        });
    };

    // Event listeners for the buttons
    englishButton.addEventListener("click", switchToEnglish);
    turkishButton.addEventListener("click", switchToTurkish);
});
