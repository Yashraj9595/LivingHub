document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('profile-name').value;
    const email = document.getElementById('profile-email').value;

    localStorage.setItem('userName', name);

    alert('Profile updated successfully!');
});

function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    window.location.href = 'index.html';
}
