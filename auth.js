function showSignUpForm() {
    document.getElementById('login-form-container').style.display = 'none';
    document.getElementById('signup-form-container').style.display = 'block';
}

function showLoginForm() {
    document.getElementById('signup-form-container').style.display = 'none';
    document.getElementById('login-form-container').style.display = 'block';
}

const predefinedUsers = [
    {
        email: 'ahire.parimal18@gmail.com',
        password: '12345678',
        name: 'Parimal Ahire'
    }
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = predefinedUsers.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', user.name);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid login credentials');
    }
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    predefinedUsers.push({ name, email, password });

    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    window.location.href = 'profile.html';
});
