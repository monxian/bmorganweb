if ('ontouchstart' in window) {
    /* cache dom references */
    var $body = $('body');

    /* bind events */
    $(document)
        .on('focus', 'input', function() {
            $body.addClass('fixfixed');
        })
        .on('blur', 'input', function() {
            $body.removeClass('fixfixed');
        })
        .on('focus', 'textarea', function(){
            $body.addClass('fixfixed');
        })
        .on('blur', 'textarea', function(){
        $body.removeClass('fixfixed');
    });
}