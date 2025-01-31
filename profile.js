document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    if (!sessionStorage.getItem('isLoggedIn')) {
        window.location.href = 'index.html';
        return;
    }

    // Initialize UI elements
    const editProfileModal = document.getElementById('editProfileModal');
    const editProfileBtn = document.getElementById('editProfileBtn');
    const closeModalBtn = document.querySelector('.close-modal');
    const editProfileForm = document.getElementById('editProfileForm');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const changeAvatarBtn = document.querySelector('.change-avatar-btn');

    // You would typically fetch this data from your backend
    let userData = {
        name: 'Admin User',
        email: 'admin@example.com',
        phone: '+1 234 567 8900',
        location: 'New York, USA',
        joinDate: 'January 1, 2024',
        bio: 'Frontend developer passionate about creating beautiful and functional web applications.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    };

    // Update profile information
    function updateProfileDisplay() {
        document.getElementById('userName').textContent = `Welcome, ${userData.name}`;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('fullName').textContent = userData.name;
        document.getElementById('phone').textContent = userData.phone;
        document.getElementById('location').textContent = userData.location;
        document.getElementById('joinDate').textContent = userData.joinDate;
        document.getElementById('userBio').textContent = userData.bio;
        
        // Update skills
        const skillsContainer = document.getElementById('skillsList');
        skillsContainer.innerHTML = userData.skills
            .map(skill => `<span class="skill-tag">${skill}</span>`)
            .join('');
    }

    // Handle logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        sessionStorage.removeItem('isLoggedIn');
        window.location.href = 'index.html';
    });

    // Handle tab switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // Here you would typically show/hide different content sections
        });
    });

    // Handle modal
    editProfileBtn.addEventListener('click', () => {
        // Populate form with current data
        document.getElementById('editName').value = userData.name;
        document.getElementById('editPhone').value = userData.phone;
        document.getElementById('editLocation').value = userData.location;
        document.getElementById('editBio').value = userData.bio;
        document.getElementById('editSkills').value = userData.skills.join(', ');
        
        editProfileModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        editProfileModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === editProfileModal) {
            editProfileModal.style.display = 'none';
        }
    });

    // Handle form submission
    editProfileForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Update userData with form values
        userData = {
            ...userData,
            name: document.getElementById('editName').value,
            phone: document.getElementById('editPhone').value,
            location: document.getElementById('editLocation').value,
            bio: document.getElementById('editBio').value,
            skills: document.getElementById('editSkills').value
                .split(',')
                .map(skill => skill.trim())
                .filter(skill => skill !== '')
        };

        // Update display
        updateProfileDisplay();
        
        // Close modal
        editProfileModal.style.display = 'none';
    });

    // Handle avatar change
    changeAvatarBtn.addEventListener('click', () => {
        // Simulate file input click
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    document.getElementById('profilePic').src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        fileInput.click();
    });

    // Initialize profile display
    updateProfileDisplay();
}); 