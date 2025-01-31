// Login Form Handler
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('errorMessage');
        
        // Simple validation
        if (username.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'Please fill in all fields';
            return;
        }
        
        // Login check
        if (username === 'admin' && password === 'admin') {
            errorMessage.textContent = 'Login successful!';
            errorMessage.style.color = '#28a745';
            
            sessionStorage.setItem('isLoggedIn', 'true');
            
            setTimeout(() => {
                window.location.href = 'profile.html';
            }, 1500);
        } else {
            errorMessage.textContent = 'Invalid username or password';
            errorMessage.style.color = '#d93025';
        }
    });

    // Clear error message when typing
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    if (usernameInput && passwordInput) {
        usernameInput.addEventListener('input', clearError);
        passwordInput.addEventListener('input', clearError);
    }
}

function clearError() {
    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
        errorMessage.textContent = '';
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// CTA Button Handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! This is where you can add your custom action.');
    });
}

// Active Navigation Links on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (mobileMenuBtn && navLinks && navOverlay) {
        // Toggle menu function
        const toggleMenu = () => {
            const isActive = navLinks.classList.contains('active');
            
            // Toggle classes
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            navOverlay.classList.toggle('active');
            
            // Toggle body scroll
            document.body.style.overflow = isActive ? '' : 'hidden';
            
            // Toggle menu icon
            const menuIcon = mobileMenuBtn.querySelector('i');
            if (menuIcon) {
                menuIcon.className = isActive ? 'fas fa-bars' : 'fas fa-times';
            }
        };

        // Menu button click
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        // Overlay click
        navOverlay.addEventListener('click', toggleMenu);

        // Menu links click
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });

        // Prevent menu close when clicking inside
        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }
});

// Smooth Scrolling
document.addEventListener('DOMContentLoaded', () => {
    const smoothScroll = (e, href) => {
        e.preventDefault();
        const targetId = href === '#' ? 'body' : href;
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Add smooth scrolling to all menu links
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            smoothScroll(e, link.getAttribute('href'));
        });
    });
});

// Active menu link on scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

    if (sections.length && navLinks.length) {
        const setActiveLink = () => {
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };

        window.addEventListener('scroll', setActiveLink);
        window.addEventListener('load', setActiveLink);
    }
}); 