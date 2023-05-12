function SignupModal() {
    document.getElementById('signupModal').style.display = 'block';
}

function SigninModal() {
    document.getElementById('signinModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('signinModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'none';
}

function displaySignupModal() {
    document.getElementById('signinModal').style.display = 'none';
    document.getElementById('signupModal').style.display = 'block';
}