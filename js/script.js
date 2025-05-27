document.addEventListener('DOMContentLoaded', function() {
    // Animação ao scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if(entry.target.querySelector('img')) {
                    entry.target.querySelector('img').classList.add('animate-image');
                }
            }
        });
    }, observerOptions);

    // Observar todas as seções
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Smooth scroll para navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
