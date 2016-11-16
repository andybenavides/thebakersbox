$(function() {
  $("form[name='contact-form']").validate({
    rules: {
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      firstName: "Please enter your firstname",
      lastName: "Please enter your lastname",
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});