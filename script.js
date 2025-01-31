document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    // Simple validation
    if (username.trim() === '' || password.trim() === '') {
        errorMessage.textContent = 'Please fill in all fields';
        return;
    }
    
    // This is where you would typically make an API call to your backend
    // For demonstration, we'll just simulate a login check
    if (username === 'admin' && password === 'admin') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = '#28a745';
        
        // Set login status
        sessionStorage.setItem('isLoggedIn', 'true');
        
        // Redirect to profile page
        setTimeout(() => {
            window.location.href = 'profile.html';
        }, 1500);
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = '#d93025';
    }
});

// Clear error message when user starts typing
document.getElementById('username').addEventListener('input', clearError);
document.getElementById('password').addEventListener('input', clearError);

function clearError() {
    document.getElementById('errorMessage').textContent = '';
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to the CTA button
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    alert('Thank you for your interest! This is where you can add your custom action.');
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
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