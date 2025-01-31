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
    if (username === 'admin' && password === 'password123') {
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