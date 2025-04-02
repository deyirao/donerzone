document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animated");

    const observer = new IntersectionObserver(entries => {
        let delay = 0; 
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);

                // Adjust delay for sequential appearance
                if (entry.target.classList.contains("animated-fast")) {
                    delay += 100; // Faster animation, shorter delay
                } else {
                    delay += 300; // Default speed
                }
            }
        });
    }, { threshold: 0.2 });

    animatedElements.forEach(element => observer.observe(element));
});
