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
        text: 'Sorry, fill in the Username input!',
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
        text: 'Sorry, fill in the Password input!',
        cancelButtonText: 'Ok',
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonColor: 'darkred'
      });
      return;
    }
  
    const users = [
      {
        name: 'Abdulsalam',
        role: 'admin',
        v_username: 'abdul_salam',
        v_password: 'admin@12'
      },
      {
        name: 'Sales Person',
        role: 'sales',
        v_username: 'sales',
        v_password: 'sales@12'
      }
    ];
  
    // Check if any user matches
    const matchedUser = users.find(user => user.v_username === username && user.v_password === password);
  
    if (!matchedUser) {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed!',
        text: 'Invalid Username or Password.',
        cancelButtonColor: 'darkred'
      });
      return;
    }
  
    // Ask for confirmation to login
    Swal.fire({
      icon: 'question',
      title: 'Login to System?',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Login',
      cancelButtonText: 'Destroy',
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
          text: `Welcome back to ${matchedUser.role.toUpperCase()} Dashboard`,
          timer: 3000,
          showConfirmButton: true,
          confirmButtonColor: '#276dc9',
        }).then(() => {
          window.location.href = matchedUser.role + 'dashboard.html';
        });
      }
    });
  });
  