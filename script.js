// FAQ Accordion – Abre um e fecha os outros
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {

            // Fecha todos os outros
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    i.querySelector(".faq-answer").style.maxHeight = null;
                }
            });

            // Alterna o item clicado
            item.classList.toggle("active");
            const answer = item.querySelector(".faq-answer");

            if (item.classList.contains("active")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
});
