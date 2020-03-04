// Starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener(
    'load',
    function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');

      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener(
          'submit',
          function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();

              // Get form groups
              var eachGroup = forms[0].getElementsByClassName('form-group');

              // For each form group, store their respective input fields and validation error messages into variables
              for (var group of eachGroup) {
                var input = group.getElementsByClassName('form-control');
                let error = group.getElementsByClassName('invalid-feedback');

                // For each input field listen for "focus". If detected - remove validation error styling
                for (var element of input) {
                  element.addEventListener('focus', event => {
                    event.target.style.background = '';
                    event.target.style.border = '1px solid #ced4da';
                    event.target.style.boxShadow =
                      '0 0 0 0.2rem rgba(0,123,255,.25)';
                    // For each input field, set the validation error message display to "none"
                    for (var invalid of error) {
                      invalid.style.display = 'none';
                    }
                  });

                  // Restore validation error styling and error message if blur event (!focus) is detected on the input field
                  element.addEventListener('blur', event => {
                    event.target.style.background = '';
                    event.target.style.border = '';
                    event.target.style.boxShadow = '';
                    for (var invalid of error) {
                      invalid.style.display = '';
                    }
                  });
                }
              }
            }
            form.classList.add('was-validated');
          },
          false
        );
      });
    },
    false
  );
})();
