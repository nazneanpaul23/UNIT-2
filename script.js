document.addEventListener("DOMContentLoaded", () => {
    const monitoringSection = document.querySelector("#monitoring");
    const resourceImages = document.querySelectorAll("#resource-images img");
    let currentImageIndex = 0;
    let intervalId = null;

    // Debugging: Verifică dacă secțiunea este accesată
    console.log("Pagina a fost încărcată și scriptul este activ!");

    // Ascunde imaginile inițial
    resourceImages.forEach(img => img.classList.remove("active"));

    // Funcția pentru a schimba imaginea pentru slide-show
    const startSlideShow = () => {
        intervalId = setInterval(() => {
            // Ascunde imaginea curentă
            resourceImages[currentImageIndex].classList.remove("active");

            // Trecerea la următoarea imagine
            currentImageIndex = (currentImageIndex + 1) % resourceImages.length;

            // Afișează imaginea următoare
            resourceImages[currentImageIndex].classList.add("active");
        }, 3000); // 3 secunde între imagini
    };

    // Afișează mesaj la dublu-click pentru debugging
    monitoringSection.addEventListener("dblclick", () => {
        console.log("Dublu-click detectat! Începem slide-show-ul.");
        
        // Dacă nu este deja pornit slide-show-ul
        if (!intervalId) { 
            // Afișează prima imagine
            resourceImages[currentImageIndex].classList.add("active");
            startSlideShow();
        }
    });
});


