const form = document.getElementById('register-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username === '') {
        alert('Please enter a username');
        return;
    }

    if (email === '') {
        alert('Please enter an email');
        return;
    }

    if (password === '') {
        alert('Please enter a password');
        return;
    }

    if (confirmPassword === '') {
        alert('Please confirm your password');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // If all fields are valid, submit the form
    form.submit();
});

