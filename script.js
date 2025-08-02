document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll animations to feature cards
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 1s ${entry.target.dataset.delay || '0s'} forwards`;
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach((card, index) => {
        card.dataset.delay = `${index * 0.2}s`;
        observer.observe(card);
    });

    // Dynamic text animation
    const dynamicText = document.getElementById('dynamic-text');
    const words = ['Brilliance', 'Ideas', 'Creativity', 'Thoughts'];
    let wordIndex = 0;

    setInterval(() => {
        dynamicText.classList.add('fade-out');
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            dynamicText.textContent = words[wordIndex];
            dynamicText.classList.remove('fade-out');
        }, 500);
    }, 3000);
});
