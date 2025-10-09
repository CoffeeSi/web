(() => {
      'use strict';
      const forms = document.querySelectorAll('.needs-validation');

      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          const password = form.querySelector('#password');
          const confirmPassword = form.querySelector('#confirmPassword');

          if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity("Passwords do not match");
          } else {
            confirmPassword.setCustomValidity("");
          }

          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add('was-validated');
        }, false);
      });
    })();