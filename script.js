// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header background change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const logo = document.querySelector('.logo');
    
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.color = '#333';
        logo.style.color = '#333';
        navLinks.forEach(link => {
            link.style.color = '#333';
        });
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.1)';
        header.style.color = 'white';
        logo.style.color = 'white';
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
});

// Counter function for skill cards
function incrementCounter(card) {
    const counter = card.querySelector('.counter');
    let count = parseInt(counter.textContent);
    count++;
    counter.textContent = count;
    
    // Add a little animation
    counter.style.transform = 'scale(1.2)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 200);
}

// Contact button alert
function showAlert() {
    alert('Thanks for your interest! This is just a practice website. 😊');
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.querySelector('.theme-toggle');
    
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️';
    } else {
        toggleBtn.textContent = '🌙';
    }
}

// Add entrance animations to cards when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize card animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Observe all cards for animation
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
    
    // Welcome message
    console.log('Welcome to my practice website! Check out the code to see how it works. 🚀');
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add click effect to all buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Add typing effect to hero title (optional enhancement)
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    
    // Uncomment below lines to enable typing effect
    /*
    heroTitle.textContent = '';
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    setTimeout(typeWriter, 1000);
    */
});