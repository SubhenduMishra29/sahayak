$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();  // Prevent the form from submitting normally

        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('#formResponse').html(response);  // Display the response
                $('#registerForm')[0].reset();      // Reset the form after submission
            }
        });
    });
});
