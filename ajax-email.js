$(function () {
    // get the form
    var form = $('#ajax-form');

    //get message from text area
    var formMessages = $('#message');

    $(form).submit(function (event) {
        //stop the browser from submitting
        event.preventDefault();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function (response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).show();
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');


                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
        }).fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).show();
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
         });
    });

});

