document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const form = document.getElementById('registrationForm');
  
    // Validasi Username
    username.addEventListener('keyup', () => {
      const feedback = document.getElementById('usernameFeedback');
      const usernamePattern = /^[a-zA-Z0-9]{5,20}$/;
      if (usernamePattern.test(username.value)) {
        feedback.textContent = 'Username valid';
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
        feedback.style.display = 'block';
      } else {
        feedback.textContent = 'Username harus 5-20 karakter alfanumerik';
        feedback.classList.remove('valid');
        feedback.style.display = 'block';
      }
    });
  
    // Validasi Email
    email.addEventListener('change', () => {
      const feedback = document.getElementById('emailFeedback');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(email.value)) {
        feedback.textContent = 'Email valid';
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
        feedback.style.display = 'block';
      } else {
        feedback.textContent = 'Format email tidak valid';
        feedback.classList.remove('valid');
        feedback.style.display = 'block';
      }
    });
  
    // Validasi Password
    password.addEventListener('keyup', () => {
      const feedback = document.getElementById('passwordFeedback');
      const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (passwordPattern.test(password.value)) {
        feedback.textContent = 'Password kuat';
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
        feedback.style.display = 'block';
      } else {
        feedback.textContent = 'Password harus minimal 8 karakter, mencakup huruf dan angka';
        feedback.classList.remove('valid');
        feedback.style.display = 'block';
      }
    });
  
    // Konfirmasi Password
    confirmPassword.addEventListener('input', () => {
      const feedback = document.getElementById('confirmPasswordFeedback');
      if (confirmPassword.value === password.value) {
        feedback.textContent = 'Password cocok';
        feedback.classList.add('valid');
        feedback.classList.remove('invalid');
        feedback.style.display = 'block';
      } else {
        feedback.textContent = 'Password tidak cocok';
        feedback.classList.remove('valid');
        feedback.style.display = 'block';
      }
    });
  
    // Validasi Akhir saat Submit
    form.addEventListener('submit', (e) => {
      if (
        !/^[a-zA-Z0-9]{5,20}$/.test(username.value) ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ||
        !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value) ||
        confirmPassword.value !== password.value
      ) {
        e.preventDefault();
        alert('Harap perbaiki kesalahan dalam formulir sebelum mengirim.');
      } else {
        alert('Pendaftaran berhasil!');
      }
    });
  });
  