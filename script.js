// Page Information Display - Required for Assignment
document.addEventListener('DOMContentLoaded', function () {
    // Display page location
    const pageLoc = document.getElementById('page-location');
    if (pageLoc) {
        pageLoc.textContent = `Page: ${window.location.href}`;
    }

    // Display last modified date
    const lastMod = document.getElementById('last-modified');
    if (lastMod) {
        const date = new Date(document.lastModified);
        lastMod.textContent = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            window.scrollTo({
                top: target.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Simple navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.pageYOffset > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 240, 255, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    }
});

// Console message
console.log('%c👨‍💻 Ramim Mahabub - Portfolio', 'color: #00f0ff; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and JavaScript', 'color: #ff006e; font-size: 14px;');
