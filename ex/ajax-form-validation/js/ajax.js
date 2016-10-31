	function myForm() {
		$('#loader').removeClass('hidden');
		var formNm = $('#form');
		$.ajax({
		    type: "POST",
		    url: 'php/process.php',
		    data: formNm.serialize(),
		    success: function (data) {
		    	$('#loader').addClass('hidden');
		        alert('Welcome ' + $('#email').val());
		    }
		});
		return false;
	}
	$(function() {
	  // Initialize form validation on the registration form.
	  // It has the name attribute "registration"
	  $("#form").validate({
	    // Specify validation rules
	    rules: {
	      // The key name on the left side is the name attribute
	      // of an input field. Validation rules are defined
	      // on the right side
	      email: {
	        required: true,
	        // Specify that email should be validated
	        // by the built-in "email" rule
	        email: true
	      },
	      date: {
	      	required: true
	      },
	      password: {
	        required: true
	      },
	      passwordConfirm: {
	        required: true,
	        equalTo : "#password"
	      }
	    },
	    // Specify validation error messages
	    messages: {
	      date: "Please enter your birthday date",
	      password: {
	        required: "Please provide a password",
	      },
	      passwordConfirm: {
	        required: "Please provide a password",
	        equalTo : "Please enter the same passwords"
	      },
	      email: "Please enter a valid email address"
	    },
	    // Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {

	      myForm();
	  }
	  });
	});