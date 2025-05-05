const togglePassword = document.getElementById('togglePassword');
  const passwordField = document.getElementById('password');

  togglePassword.addEventListener('change', function () {
    // Toggle between text and password
    passwordField.type = this.checked ? 'text' : 'password';
  });

  /*
  document.getElementById("loginForm").addEventListener('submit', function(event){
    event.preventDefault();


    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if(username === ""){
        Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong!',
            text: 'Sorry, Fill in the Username Input!',
            showCancelButton: true,
            cancelButtonText: 'Ok'
        });
        return;
    } else if (password === ""){
        Swal.fire({
            icon: 'error',
            title: 'Something Went Wrong!',
            text: 'Sorry, Fill in the Password Input!',
            showCancelButton: true,
            cancelButtonText: 'Ok'
        });
        return;
    };

    const user = {
        name: 'Abdulsalam',
        role: 'Proprietor',
        v_username: 'abdul_salam',
        v_password: 'admin@12'
    }

    Swal.fire({
        icon: 'question',
        title: 'Login to System ?',
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: 'Login',
        cancelButtonText: 'Destroy',
        allowOutsideClick: false,
      preConfirm: () => {
        return new Promise((resolve) => {
          Swal.showLoading(); // Show loading spinner
          setTimeout(() => {
            resolve();
          }, 2000); // Simulate delay
        });
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Congratulations',
          text: 'Welcome back to ADMIN Dashboard',
          timer: 3000,
          showConfirmButton: true,
        }).then(() => {
          window.location.href = 'dashboard.html';
        });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: 'Invalid Username or Password.'
    });
  }
    

  });*/

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
      showCancelButton: true
    });
    return;
  }

  if (password === "") {
    Swal.fire({
      icon: 'error',
      title: 'Something Went Wrong!',
      text: 'Sorry, fill in the Password input!',
      cancelButtonText: 'Ok',
      showCancelButton: true
    });
    return;
  }

  const user = {
    name: 'Abdulsalam',
    role: 'Proprietor',
    v_username: 'abdul_salam',
    v_password: 'admin@12'
  };

  // Check credentials first
  if (username !== user.v_username || password !== user.v_password) {
    Swal.fire({
      icon: 'error',
      title: 'Login Failed!',
      text: 'Invalid Username or Password.'
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
    allowOutsideClick: false,
    preConfirm: () => {
      return new Promise((resolve) => {
        Swal.showLoading(); // Show loading spinner
        setTimeout(() => {
          resolve();
        }, 2000); // Simulate delay
      });
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        icon: 'success',
        title: 'Congratulations',
        text: 'Welcome back to ADMIN Dashboard',
        timer: 3000,
        showConfirmButton: true
      }).then(() => {
        window.location.href = 'dashboard.html';
      });
    }
  });
});
