const togglePassword = document.getElementById('togglePassword');
  const passwordField = document.getElementById('password');
  const texting = document.getElementById('texting');

  togglePassword.addEventListener('change', function () {
    // Toggle between text and password
    passwordField.type = this.checked ? 'text' : 'password';
  });

  document.getElementById("loginForm").addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "") {
      Swal.fire({
        icon: 'error',
        title: 'Something Went Wrong!',
        text: 'Please fill in the Username field.',
        cancelButtonText: 'Ok',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: 'darkred'
      });
      return;
    }
  
    if (password === "") {
      Swal.fire({
        icon: 'error',
        title: 'Something Went Wrong!',
        text: 'Please fill in the Password field.',
        cancelButtonText: 'Ok',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: 'darkred'
      });
      return;
    }
  
    const user = {
      name: 'Abdulsalam',
      role: 'Proprietor',
      v_username: 'abdul_salam',
      v_password: 'admin@12'
    };
  
    if (username !== user.v_username || password !== user.v_password) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: 'Invalid Username or Password.',
        cancelButtonText: 'Ok',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: 'darkred'
      });
      return;
    }
  
    Swal.fire({
      icon: 'question',
      title: 'Login to System?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Login',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#276dc9',
      cancelButtonColor: 'darkred',
      allowOutsideClick: false,
      preConfirm: () => {
        return new Promise((resolve) => {
          Swal.showLoading();
          setTimeout(() => {
            resolve();
          }, 2000);
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'Redirecting to the ADMIN Dashboard...',
          timer: 3000,
          showConfirmButton: true,
          confirmButtonColor: '#276dc9',
        }).then(() => {
          window.location.href = 'dashboard.html';
        });
      }
    });
  });
  